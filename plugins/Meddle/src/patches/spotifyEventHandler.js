import { nests } from "@cumcord/modules/internal";
import { findByProps } from "@cumcord/modules/webpack";
import { instead } from "@cumcord/patcher";
import { getActiveSocketAndDevice, SpotifyAPI, SpotifyEndpoints } from "../WPMODULES";

const { SpotifySocket } = findByProps("SpotifySocket");

export const spotifyNest = nests.make({
    overrides: {
        title: {
            value: "",
            enabled: false,
        },
        artists: {
            value: "",
            enabled: false,
        },
        album: {
            value: "",
            enabled: false,
        },
        cover: {
            value: "",
            enabled: false,
        },
        time: {
            position: 0,
            duration: 0,
            enabled: false,
        },
    },
});

function updateNest(body) {
    spotifyNest.store.playerState = body;

    if (!body?.item) return;
    if (!spotifyNest.ghost.overrides.title.enabled) spotifyNest.store.overrides.title.value = spotifyNest.ghost.playerState.item.name;
    if (!spotifyNest.ghost.overrides.artists.enabled) spotifyNest.store.overrides.artists.value = spotifyNest.ghost.playerState.item.artists.map(a => a.name).join(", ");
    if (!spotifyNest.ghost.overrides.album.enabled) spotifyNest.store.overrides.album.value = spotifyNest.ghost.playerState.item.album.name;
    if (!spotifyNest.ghost.overrides.cover.enabled) spotifyNest.store.overrides.cover.value = spotifyNest.ghost.playerState.item.album.images[0].url;
    if (!spotifyNest.ghost.overrides.time.enabled) {
        spotifyNest.store.overrides.time.position = spotifyNest.ghost.playerState.progress_ms;
        spotifyNest.store.overrides.time.duration = spotifyNest.ghost.playerState.item.duration_ms;
    }
}

export default function spotifyEventHandler() {
    fetchState();

    return instead("handleEvent", SpotifySocket.prototype, ([e], orig) => {
        if (e.type === "PLAYER_STATE_CHANGED" && e.event !== null) {
            updateNest(e.event?.state);

            if (spotifyNest.ghost.overrides.title.enabled) e.event.state.item.name = spotifyNest.ghost.overrides.title.value;
            if (spotifyNest.ghost.overrides.artists.enabled) {
                const artists = spotifyNest.ghost.overrides.artists.value.split(",").map(a => a.trim());
                for (const index in artists) {
                    e.event.state.item.artists[index].name = artists[index];
                }
            }
            if (spotifyNest.ghost.overrides.album.enabled) e.event.state.item.album.name = spotifyNest.ghost.overrides.album.value;
            if (spotifyNest.ghost.overrides.cover.enabled) e.event.state.item.album.images[0].url = spotifyNest.ghost.overrides.cover.value;
            if (spotifyNest.ghost.overrides.time.enabled) {
                e.event.state.item.duration_ms = spotifyNest.ghost.overrides.time.duration;
                e.event.state.progress_ms = spotifyNest.ghost.overrides.time.position;
            } 
        }

        orig.apply(this, [e]);
    });
}

export function fetchState() {
    const socket = getActiveSocketAndDevice()?.socket;

    if (socket) {
        SpotifyAPI.get(socket.accountId, socket.accessToken, { url: SpotifyEndpoints.PLAYER })
            .then(r => updateNest(r?.body));
    }
}

export function forceEventUpdate() {
    const socket = getActiveSocketAndDevice()?.socket;

    if (socket) {
        socket.handleEvent({
            type: "PLAYER_STATE_CHANGED",
            event: {
                state: spotifyNest.ghost.playerState,
            },
        });
    }
}
import { ErrorBoundary } from "@cumcord/ui/components";

import HeaderBar from "./components/HeaderBar";
import TabGeneral from "./components/TabGeneral";
import TabDispatch from "./components/TabDispatch";
import TabServers from "./components/TabServers";
import TabSpotify from "./components/TabSpotify";

export default function Settings(props) {
    return (
        <ErrorBoundary>
            <div className="beef-meddle-settings">
                <HeaderBar
					items={[
                        { text: "General", component: TabGeneral },
						{ text: "FluxDispatcher", component: TabDispatch },
                        { text: "Servers", component: TabServers },
                        { text: "Spotify", component: TabSpotify },
					]}
				/>
            </div>
        </ErrorBoundary>
    );
}

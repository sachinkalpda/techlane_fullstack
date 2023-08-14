
import DashboardStatGrid from "./DashboardStatGrid";
import Graphs from "./Graphs";


export default function Dashboard() {
    
    return (
        <div className="flex-1 flex flex-col gap-4">
            <DashboardStatGrid />
            <Graphs />
            
        </div>

    )
}
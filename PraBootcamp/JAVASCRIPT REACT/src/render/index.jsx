import LogRender from "./render/conditional-render";
import ListRender from "./render/list-render";

function RenderApp() {
    const series = [
          {id: 1,title:'MrRobot', episode : 45},
          {id: 2,title: 'BetterCallSaul', episode : 63},
          {id: 3,title: 'AdvantureTime', episode : 283},
          {id: 4,title: 'NeonGenesisEvangelion', episode : 26},
          {id: 5,title: 'loki', episode : 12}
  ]
    const anime = [
          {id: 1,title:'TokyoGhoul', episode : 40},
          {id: 2,title: 'DeathNote', episode : 36},
          {id: 3,title: 'MySenpaiWaOtokonoko', episode : 283},
          {id: 4,title: 'NeonGenesisEvangelion', episode : 26},
          {id: 5,title: 'lupa', episode : 3}
  ]

  return(
    <div>
      <LogRender logStatus={true} userName={"Guest"}/>
      <ListRender mediatok={series}/>
      <ListRender mediatok={anime}/>
    </div>

    )
}


export default RenderApp
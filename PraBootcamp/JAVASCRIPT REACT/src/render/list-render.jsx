const ListRender = (props) => {
    // mediatokSeries.sort((a,b)=>a.title.localeCompare(b.title));
    // mediatokSeries.sort((a,b)=>b.title.localeCompare(a.title));
    // mediatokSeries.sort((a,b)=> (a.episode)-(b.episode))
    // mediatokSeries.sort((a,b)=> (b.episode)-(a.episode))

    // const mediatokMiniSeries = mediatokSeries.filter((a,b) => {});
    // const mediatokSeriess = mediatokSeries.filter((a) => a.episode >= 50)

    const render = props.mediatok.map(mediatoks => {
        return(<ol key={mediatoks.id}>{mediatoks.title} episode : <b>{mediatoks.episode}</b></ol>
        )
    })

    return (render);
}
export default ListRender;
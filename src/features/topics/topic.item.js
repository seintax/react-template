import React from 'react'
import { FaClipboard, FaFolderOpen } from "react-icons/fa"
import { Grid } from "../../interface/grid.ui"

const TopicItem = ({ index, item, column, active, setactive }) => {
    return (
        (item && (
            <div key={index} className={`row-wrap ${active === item.id ? "selected" : "default"}`} onDoubleClick={() => setactive(item.id)}>
                <div className="row">
                    <Grid.Item column={column[0]}>
                        {index + 1}.
                    </Grid.Item>
                    <Grid.Item column={column[1]}>
                        <span className="icon-btn bg-[#ce8908] text-[13px]">
                            <FaFolderOpen />
                        </span>
                        <span className="icon-btn bg-[#116dc4] text-[12px]">
                            <FaClipboard />
                        </span>
                    </Grid.Item>
                    <Grid.Item column={column[2]}>
                        {item.name}
                    </Grid.Item>
                    <Grid.Item column={column[3]}>
                        {item.email}
                    </Grid.Item>
                    <Grid.Item column={column[4]}>
                        {item.age}
                    </Grid.Item>
                    <Grid.Item column={column[5]}>
                        {item.gender}
                    </Grid.Item>
                    <Grid.Item column={column[6]}>
                        {item.status}
                    </Grid.Item>
                    <Grid.Item column={column[7]}>
                        {item.address}
                    </Grid.Item>
                </div>
            </div>
        ))
    )
}

export default TopicItem
import React from 'react'
import { useState } from "react"
import { FaCloudDownloadAlt, FaSearch } from "react-icons/fa"
import { useClientContext } from "../contexts/client.context"
import TopicCreate from "../features/topics/topic.create"
import TopicData from "../features/topics/topic.data"
import TopicSearch from "../features/topics/topic.search"
import { Grid } from "../interface/grid.ui"
import { Page } from "../interface/page.ui"

const Topics = () => {
    const { config, theme } = useClientContext()
    const [showsearch, setshowsearch] = useState(false)
    const [showtopics, setshowtopics] = useState(false)
    const [topic, settopic] = useState(false)
    const [search, setsearch] = useState("")
    const [data, setdata] = useState()

    const rSearch = {
        label: "Search",
        icon: <FaSearch />,
        onClick: function () {
            setshowsearch(true)
        }
    }

    const lTopic = {
        label: "Topic",
        transition: `${data ? "" : "hidden"}`,
        icon: <FaCloudDownloadAlt />,
        onClick: function () {
            setshowtopics(true)
        }
    }

    const TopicBadge = {
        content:
            <span>Sample Badge</span>
    }

    const Descriptor = {
        description:
            <span className="hidden lg:flex">CURRENT TOPIC:&nbsp;</span>,
        subscript:
            <span className={`font-bold`}>
                {topic ? topic?.title?.toUpperCase() : "NONE"}
            </span>
    }

    const searchChange = (e) => {
        setsearch(e.target.value.toUpperCase())
    }

    const searchKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (search) {
                return
            }
        }
    }

    return (
        <Page.StyledPage theme={theme}>
            <Page.Controls
                rcontrols={[rSearch]}
                lcontrols={[lTopic]}
                badges={[TopicBadge]}
                descriptor={Descriptor}
            />
            <Page.SearchBar
                search={search}
                onSearchChange={searchChange}
                onSearchKeyDown={searchKeyDown}
                recordStatus={`${data?.length || 0} TOPICS`}
            />
            <TopicData data={data} setdata={setdata} topic={topic} />
            <TopicSearch show={showsearch} setshow={setshowsearch} settopic={settopic} />
            <TopicCreate show={showtopics} setshow={setshowtopics} data={data} setdata={setdata} />
        </Page.StyledPage>
    )
}

export default Topics
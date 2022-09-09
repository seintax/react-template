import React from 'react'
import { useState } from "react"
import { FormElement } from "../../interface/elem.ui"
import { Modal } from "../../interface/modal.ui"

const TopicCreate = ({ show, setshow, data, setdata }) => {
    const [info, setinfo] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        status: "",
        address: ""
    })

    const toggleCancel = (e) => {
        setshow(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let topic = data
        topic.push({
            id: topic?.length,
            name: info.name,
            email: info.email,
            age: info.age,
            gender: info.gender,
            status: info.status,
            address: info.address
        })
        setdata(topic)
        setinfo({
            name: "",
            email: "",
            age: "",
            gender: "",
            status: "",
            address: ""
        })
        setshow(false)
    }

    return (
        (show && (
            <Modal.StyledModal>
                <form onSubmit={onSubmit} className="md:w-[500px] md:h-auto">
                    <header className="title">
                        New Topic
                    </header>
                    <div className="content">
                        <FormElement.Input
                            type="text"
                            name="name"
                            label="Name"
                            autoComplete="off"
                            value={info.name}
                            onChange={(e) =>
                                setinfo(prev => ({ ...prev, name: e.target.value }))
                            }
                            information={{
                                title: "Requirement",
                                description:
                                    <span>
                                        Minimum of 10 characters.
                                    </span>
                            }}
                            startFocus={true}
                            required
                        />
                        <FormElement.Input
                            type="email"
                            name="email"
                            label="Email"
                            autoComplete="off"
                            value={info.email}
                            onChange={(e) =>
                                setinfo(prev => ({ ...prev, email: e.target.value }))
                            }
                            information={{
                                title: "Requirement",
                                description:
                                    <span>
                                        Valid email address.
                                    </span>
                            }}
                            required
                        />
                        <FormElement.Input
                            type="number"
                            name="age"
                            label="Age"
                            autoComplete="off"
                            value={info.age}
                            onChange={(e) =>
                                setinfo(prev => ({ ...prev, age: e.target.value }))
                            }
                            required
                        />
                        <FormElement.Select
                            name="gender"
                            label="Gender"
                            options={[
                                { key: "", value: "" },
                                { key: "Male", value: "MALE" },
                                { key: "Female", value: "FEMALE" },
                            ]}
                            value={info.gender}
                            onChange={(e) =>
                                setinfo(prev => ({ ...prev, gender: e.target.value }))
                            }
                            required={true}
                        />
                        <FormElement.Select
                            name="status"
                            label="Civil Status"
                            options={[
                                { key: "", value: "" },
                                { key: "Single", value: "SINGLE" },
                                { key: "Married", value: "MARRIED" },
                            ]}
                            value={info.status}
                            onChange={(e) =>
                                setinfo(prev => ({ ...prev, status: e.target.value }))
                            }
                            required={true}
                        />
                        <FormElement.Input
                            type="text"
                            name="address"
                            label="Address"
                            autoComplete="off"
                            value={info.address}
                            onChange={(e) =>
                                setinfo(prev => ({ ...prev, address: e.target.value }))
                            }
                            required
                        />
                        <FormElement.Action
                            submitLabel="Submit"
                            cancelLabel="Cancel"
                            canSubmit={true}
                            onCancelClick={toggleCancel}
                        />
                    </div>
                </form>
            </Modal.StyledModal>
        ))
    )
}

export default TopicCreate
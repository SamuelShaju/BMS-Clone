import React from "react";
import {Disclosure} from "@headlessui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlayFilters = (props) => {
    return (
        <>
            <Disclosure className="bg-samuel-700">
                {({open}) => (
                    <>
                    <Disclosure.Button className="py-2 flex items-center gap-3">
                        {open ? <BiChevronUp/> : <BiChevronDown/>}
                        <span
                            className={open ? "text-red-600" : "text-grey-700"}>
                                {props.title}
                            </span>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        <div className="flex items-center gap-3 flex-wrap">
                            {props.tags.map((tag) => (
                                <div className="border-2 border-gray-200 px-3 py-1 rounded">
                                    <span className="text-red-600 ">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}

export default PlayFilters;
/**********************************************************************
 *
 * @模块名称: usePagination.stories
 *
 * @模块作用: usePagination.stories
 *
 * @创建人: pgli
 *
 * @date: 2023/9/18 7:31 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import React from "react";
import { usePagination } from "../packages/usePagination";
import TestUsePagination from "../example/components/TestUsePagination";
import { Markdown } from '@storybook/blocks';
// @ts-ignore
import ReadMe from "../packages/usePagination/README.md?raw";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/usePagination',
    component: usePagination,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        docs: {
            page: () => (
                <>
                    <Markdown>{ReadMe}</Markdown>
                </>
            ),
        }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // data: { control: 'array' },
    },
};


export const demo = {
    args: {

    },
    render: ()=> {
        return <TestUsePagination />
    }
};



/**********************************************************************
 *
 * @模块名称: useVisibility.stories
 *
 * @模块作用: useVisibility.stories
 *
 * @创建人: pgli
 *
 * @date: 2023/9/18 7:31 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/

import React from "react";
import { useVisibility } from "../packages/useVisibility";
import TestUseVisibility from "../example/components/TestUseVisibility";
import { Markdown } from '@storybook/blocks';
// @ts-ignore
import ReadMe from "../packages/useVisibility/README.md?raw";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/useVisibility',
    component: useVisibility,
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
        return <TestUseVisibility />
    }
};



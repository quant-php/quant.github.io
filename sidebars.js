/**
 * quant
 * quant.github.io
 * Copyright (C) 2023 Thorsten Suckow-Homberg https://github.com/quant-php/quant.github.io
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        "introduction",
        "installation",
        {
            type: "category",
            label: "Packages",
            link: {type: "doc", id: "packages/overview"},
            items: [
                {
                    type: 'category',
                    label: 'Core',
                    link: {type: 'doc', id: "packages/quant/core/quant_core"},
                    items: [
                        {
                        type: 'category',
                        label: 'Contract',
                        items: [
                             "packages/quant/core/contract/arrayable",
                             "packages/quant/core/contract/comparable",
                             "packages/quant/core/contract/equatable"
                        ]
                    }, {
                        type: 'category',
                        label: 'Trait',
                        items: [
                            "packages/quant/core/trait/accessortrait"
                        ]
                    }]
                },
                "packages/quant/quant_phpstan"
            ]
        }
        /**
         * +---------------------------
         * |       Guides
         * +---------------------------
         */


    ]
};

module.exports = sidebars;

import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            repo="ThorstenSuckow/thorsten.suckow-homberg.de"
            repoId="R_kgDOJCT_sA"
            category="Blog"
            categoryId="DIC_kwDOJCT_sM4CV8kx"
            mapping="url"
            term="Welcome to @giscus/react component!"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={colorMode}
            lang="en"
            loading="lazy"
            crossorigin="anonymous"
            async
        />
    );
}
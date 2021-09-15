module.exports = {
    siteMetadata: {
        // Site URL for when it goes live
        siteUrl: `https://zaakir.io`,
        // Your Name
        name: 'Zaakir Ally',
        // Main Site Title
        title: `Zaakir Ally | Infosec Enthusiast`,
        // Description that goes under your name in main bio
        description: `An Information Security Blog`,
        // Optional: Github account URL
        github: `https://github.com/rubinkazan`,
        // Content of the About Me section
        about: `Information Security enthusiast hailing from South Africa. I am currently residing in the United Kingdom working as a software developer.`,
    },
        plugins: [
            `gatsby-plugin-react-helmet`,
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    name: `images`,
                    path: `${__dirname}/src/images`,
                },
            },
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    path: `${__dirname}/content/blog`,
                    name: `blog`,
                },
            },
            {
                resolve: `gatsby-transformer-remark`,
                options: {
                    plugins: [
                        {
                            resolve: `gatsby-remark-images`,
                            options: {
                                maxWidth: 590,
                                wrapperStyle: `margin: 0 0 30px;`,
                            },
                        },
                        {
                            resolve: `gatsby-remark-responsive-iframe`,
                            options: {
                                wrapperStyle: `margin-bottom: 1.0725rem`,
                            },
                        },
                        `gatsby-remark-prismjs`,
                        `gatsby-remark-copy-linked-files`,
                        `gatsby-remark-smartypants`,
                    ],
                },
            },
            `gatsby-transformer-sharp`,
            `gatsby-plugin-sharp`,
            `gatsby-plugin-postcss`,
            `gatsby-plugin-feed`,
            {
                resolve: `gatsby-plugin-google-analytics`,
                options: {
                    trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
                },
            },
            {
                resolve: `gatsby-plugin-manifest`,
                options: {
                    name: `devfolio`,
                    short_name: `devfolio`,
                    start_url: `/`,
                    background_color: `#663399`,
                    theme_color: `#663399`, // This color appears on mobile
                    display: `minimal-ui`,
                    icon: `src/images/icon.png`,
                },
            },
        ]
    }
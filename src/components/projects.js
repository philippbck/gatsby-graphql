import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            hasura {
                projects(
                    where: { title: { _neq: "not set" } }
                    order_by: { twitterActions: desc }
                ) {
                    id
                    title
                    description
                    url
                    twitterActions
                    areaCode
                    user_bookmarks {
                        user {
                            id
                            first_name
                            last_name
                        }
                    }
                }
            }
        }
    `);

    const projectResult = data.hasura.projects;
    return (
        <>
            <div>
                {projectResult.map(project => (
                <div key={project.id}>       
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>URL: {project.url}</p>
                    <br />
                </div>
                ))}
            </div>
        </>
    )
};

export default Projects;

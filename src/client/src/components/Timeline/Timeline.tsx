import React from 'react';
import './Timeline.css';

const Timeline = () => {
    const timelineData = [
        {
            text: 'Over 12.000 views in a single day on my Medium posts',
            date: 'Oct 2023',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url: 'https://medium.com/',
                text: 'See profile'
            }
        }, {
            text:
                'Start marketing campaign',
            date: 'Oct 2023',
            category: {
                tag: 'marketing',
                color: '#018f69'
            },
            link: {
                url:
                    '',
                text: 'Coming soon'
            }
        }, {
            text: 'Introducing pricing plans',
            date: 'Oct 2023',
            category: {
                tag: 'pricing',
                color: '#1DA1F2'
            },
            link: {
                url: 'https://localhot:3000/pricing',
                text: 'See in-app'
            }
        }, {
            text: 'Implement doc generation functionality',
            date: 'Sep 2023',
            category: {
                tag: 'app-ideas',
                color: '#FFDB14'
            },
            link: {
                url: 'https://github.com/antonzeno/rocket_doc',
                text: 'Check it out here'
            }
        }, {
            text: 'Started working on the rocket.doc repository',
            date: 'Sep 2023',
            category: {
                tag: 'app-ideas',
                color: '#FFDB14'
            },
            link: {
                url: 'https://github.com/antonzeno/rocket_doc',
                text: 'Check it out on GitHub'
            }
        },

    ]
    return (
        <div className="timeline-container">
            {timelineData.map((data) => (
                <div className="timeline-item">
                    <div className="timeline-item-content">
                        <span className="tag" style={{ background: data.category.color }}>
                            {data.category.tag}
                        </span>
                        <time>{data.date}</time>
                        <p>{data.text}</p>
                        {data.link && (
                            <a
                                href={data.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {data.link.text}
                            </a>
                        )}
                        <span className="circle" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Timeline;
function Icon({ color = '#3b3b3b', width = 17.476, height = 13 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 17.476 13"
        >
            <defs>
                <clipPath id="clip-path">
                    <path
                        fill="none"
                        d="M0 0H17.476V13H0z"
                        data-name="Rectangle 1771"
                    ></path>
                </clipPath>
            </defs>
            <g clipPath="url(#clip-path)" data-name="Group 1573">
                <path
                    fill={color}
                    d="M16.872 11.718h-1.4V2.642A.627.627 0 0014.834 2h-2.416V.641A.627.627 0 0011.777 0H8.756a.627.627 0 00-.641.641v.123H6.341V.641A.627.627 0 005.7 0H2.679a.627.627 0 00-.641.641v11.077H.641a.641.641 0 100 1.282h16.195a.627.627 0 00.641-.641.59.59 0 00-.6-.641m-2.679 0h-1.78V3.284h1.775zm-3.02 0H9.4V1.282h1.775zm-3.057 0h-1.78V2.046h1.774zm-3.02 0H3.32V9.07h1.775zm0-3.894H3.32V5.212h1.775zm0-3.894H3.32V1.282h1.775z"
                    data-name="Path 3413"
                ></path>
            </g>
        </svg>
    );
}

export default Icon;

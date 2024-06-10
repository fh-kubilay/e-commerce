function Icon({ color = '#3b3b3b', width = 16.72, height = 22.071 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 16.72 22.071"
        >
            <g data-name="Group 2281" transform="translate(.436 23.201)">
                <path
                    fill={color}
                    d="M8 0a3.743 3.743 0 00-3.75 3.731v2.24h-2.5a.551.551 0 00-.5.45L0 21.346a.52.52 0 00.5.544h15a.52.52 0 00.5-.544L14.747 6.421a.516.516 0 00-.5-.45h-2.5v-2.24A3.742 3.742 0 008 0m0 1a2.726 2.726 0 012.749 2.736v2.235H5.25v-2.24A2.725 2.725 0 018 1M2.212 6.965H4.25v1.081a1.5 1.5 0 101 0V6.965h5.5v1.081a1.5 1.5 0 101 0V6.965h2.038L14.95 20.9H1.048zm2.538 1.99a.5.5 0 11-.5.5.491.491 0 01.5-.5m6.5 0a.5.5 0 11-.5.5.491.491 0 01.5-.5"
                    data-name="Path 4313"
                    transform="translate(-.07 -23.021)"
                ></path>
                <path
                    fill="none"
                    d="M0 0H16.72V22H0z"
                    data-name="Rectangle 1855"
                    transform="translate(-.436 -23.201)"
                ></path>
            </g>
        </svg>
    );
}

export default Icon;

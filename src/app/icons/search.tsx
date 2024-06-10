function Icon({ color = '#9d9d9d', width = 15, height = 15 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 15 15"
        >
            <defs>
                <clipPath id="clip-path">
                    <path
                        fill={color}
                        d="M0 0H15V15H0z"
                        data-name="Rectangle 1745"
                    ></path>
                </clipPath>
            </defs>
            <g fill={color} clipPath="url(#clip-path)" data-name="Group 1508">
                <path
                    d="M14.806 13.884l-3.276-3.258.042-.053a6.372 6.372 0 10-1 1.016l.052-.041L13.9 14.82a.707.707 0 00.456.18.638.638 0 00.452-.195.644.644 0 000-.921m-8.3-12.592a5.216 5.216 0 11-5.216 5.216 5.221 5.221 0 015.216-5.216"
                    data-name="Path 3277"
                ></path>
                <path
                    d="M11.7 16.129a.2.2 0 00.2-.2 4.048 4.048 0 014.043-4.043.2.2 0 100-.39 4.439 4.439 0 00-4.443 4.438.2.2 0 00.2.2"
                    data-name="Path 3278"
                    transform="translate(-9.426 -9.426)"
                ></path>
            </g>
        </svg>
    );
}

export default Icon;

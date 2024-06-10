function Icon({ color = '#3b3b3b', width = 16.72, height = 22.071 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 13 15"
        >
            <defs>
                <clipPath id="clip-path">
                    <path
                        fill="#3b3b3b"
                        d="M0 0H12.125V15H0z"
                        data-name="Rectangle 1754"
                    ></path>
                </clipPath>
            </defs>
            <g data-name="Group 2347" transform="translate(-1065 -1389)">
                <g
                    clipPath="url(#clip-path)"
                    data-name="Group 1522"
                    transform="translate(1065 1389)"
                >
                    <path
                        fill="#3b3b3b"
                        d="M6.062 15a1.926 1.926 0 01-1.927-1.921v-.4H1.572A1.567 1.567 0 011.2 9.586l.558-1.1.219-3.6A4.235 4.235 0 015.04.982C5.211.373 5.6 0 6.062 0s.852.374 1.023.983a4.244 4.244 0 013.062 3.894.567.567 0 01-.518.612h-.047a.564.564 0 01-.566-.519 3.057 3.057 0 00-2.954-2.986A3.047 3.047 0 003.11 4.969l-.225 3.7a.561.561 0 01-.061.222l-.324.65h7.138L9.3 8.849a.559.559 0 01-.058-.217l-.14-2.3a.567.567 0 01.533-.6.574.574 0 01.6.531l.133 2.183.564 1.138a1.567 1.567 0 01-.376 3.09H7.989v.4A1.926 1.926 0 016.062 15m-.791-1.921a.791.791 0 001.582 0v-.4H5.272zm-3.7-2.4a.435.435 0 100 .869h8.98a.435.435 0 100-.869z"
                        data-name="Path 3310"
                        transform="translate(0 .001)"
                    ></path>
                </g>
                <circle
                    cx="3"
                    cy="3"
                    r="3"
                    fill={color}
                    data-name="Ellipse 9"
                    transform="translate(1072 1389)"
                ></circle>
            </g>
        </svg>
    );
}

export default Icon;

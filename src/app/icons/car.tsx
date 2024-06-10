function Icon({ color = '#3b3b3b', width = 19, height = 19 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 19 19"
        >
            <defs>
                <clipPath id="clip-path">
                    <path fill="none" d="M0 0H19V19H0z" data-name="Rectangle 1768"></path>
                </clipPath>
            </defs>
            <g fill={color} clipPath="url(#clip-path)" data-name="Group 1567">
                <path
                    d="M14.331 19a3.062 3.062 0 01-3.059-3.059v-.161H7.73v.161a3.059 3.059 0 01-6.118 0 .655.655 0 01.008-.088l.011-.1.007-.109-.1-.046a2.754 2.754 0 01-1.5-2.713 10.382 10.382 0 01.7-2.042 2.072 2.072 0 00.102-1.05 2.2 2.2 0 01.716-2.16l.056-.048V4.408L1.5 4.369a2.254 2.254 0 111.5 0l-.1.039v2.376l.4-.184c.175-.083.351-.166.54-.235a12.37 12.37 0 012.749-.637 11.545 11.545 0 011.289-.09c2.256 0 3.86.629 4.779 1.87a3.668 3.668 0 01.606 1.23l.032.119h.962A4.822 4.822 0 0119 13.647c0 .768-.587 2-1.471 2.109l-.141.017v.142A3.064 3.064 0 0114.331 19m-.061-4.825a1.617 1.617 0 00-.429.071l-.091.029a1.768 1.768 0 00-1.08 1.076 1.73 1.73 0 00-.11.59 1.771 1.771 0 003.542 0 1.741 1.741 0 00-.1-.575 1.784 1.784 0 00-1.086-1.09l-.092-.029a1.768 1.768 0 00-.482-.075h-.069m-9.66 0a1.617 1.617 0 00-.429.071l-.091.029a1.768 1.768 0 00-1.083 1.077 1.723 1.723 0 00-.11.59 1.771 1.771 0 003.542 0 1.741 1.741 0 00-.1-.575 1.784 1.784 0 00-1.086-1.09l-.092-.029a1.768 1.768 0 00-.482-.075H4.61m9.722-1.292a3.053 3.053 0 01.546.055l.138.029a3.065 3.065 0 01.47.145l.1.046a3.069 3.069 0 01.368.2c.059.037.114.075.17.115a3.01 3.01 0 01.248.205 3.111 3.111 0 01.254.26c.06.069.109.126.154.186.059.079.113.161.164.246l.047.079.121.045h.231l.048-.064a1.371 1.371 0 00.121-.195 1.9 1.9 0 00.2-.584 3.356 3.356 0 00-.507-1.8 3.4 3.4 0 00-2.949-1.709h-1.535a.641.641 0 01-.461-.193.63.63 0 01-.183-.457 1.7 1.7 0 00-.055-.366 2.368 2.368 0 00-.4-.855c-.664-.9-1.92-1.349-3.733-1.349-.073 0-.177 0-.318.01-.25.013-.528.035-.827.071a11.062 11.062 0 00-2.462.569 6.6 6.6 0 00-1.809.97c-.356.278-.384.484-.345 1.177a3.088 3.088 0 01-.218 1.657 9.017 9.017 0 00-.614 1.784 1.594 1.594 0 00.569 1.159l.14.12.1-.154c.034-.053.073-.1.111-.15.09-.116.14-.178.193-.238s.112-.126.163-.172a2.948 2.948 0 01.338-.279c.038-.027.078-.051.118-.076a3.255 3.255 0 01.37-.2l.118-.057A2.987 2.987 0 014 12.96l.125-.024a3.025 3.025 0 01.549-.056 3.053 3.053 0 01.546.055l.138.029a3.067 3.067 0 01.47.145l.1.046a3.069 3.069 0 01.368.2c.059.037.114.075.17.115a3.01 3.01 0 01.248.205 3.111 3.111 0 01.254.26c.06.069.109.126.154.186.059.079.113.161.164.246l.047.079.121.045h4.2l.047-.08c.079-.127.134-.21.194-.291a2.34 2.34 0 01.132-.16 3.227 3.227 0 01.279-.289 2.607 2.607 0 01.416-.316 3.029 3.029 0 01.361-.2l.108-.05a3.018 3.018 0 01.465-.145l.138-.028a3.011 3.011 0 01.548-.056M2.256 1.288a.966.966 0 10.966.966.967.967 0 00-.966-.966"
                    data-name="Path 3408"
                ></path>
                <path
                    d="M100.061 239.8a.644.644 0 110-1.288h4.83a.644.644 0 110 1.288z"
                    data-name="Path 3409"
                    transform="translate(-95.39 -228.854)"
                ></path>
            </g>
        </svg>
    );
}

export default Icon;

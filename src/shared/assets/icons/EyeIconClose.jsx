import React from 'react'

export default function EyeIconClose({isHover}) {
  const color = isHover ? '#000' :'#777776' 
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='21.187500'
			height='15.500000'
			viewBox='0 0 21.1875 15.5'
			fill='none'
		>
			<defs />
			<rect
				id='State=Default/close'
				rx='0.000000'
				width='19.000000'
				height='13.495688'
				transform='translate(1.093750 1.001953)'
				fill='#FFFFFF'
				fillOpacity='0'
			/>
			<path
				id='Vector'
				d='M5.43 2.39L15.68 12.65C14.19 13.7 12.45 14.5 10.59 14.5C5.07 14.5 0.59 7.5 0.59 7.5C0.59 7.5 2.53 4.47 5.43 2.39ZM8.19 0.92C8.96 0.65 9.76 0.5 10.59 0.5C16.11 0.5 20.59 7.5 20.59 7.5C20.59 7.5 19.6 9.05 17.97 10.69M6.59 7.5C6.59 6.48 6.97 5.56 7.59 4.85L13.45 10.29C12.72 11.04 11.71 11.5 10.59 11.5C8.38 11.5 6.59 9.71 6.59 7.5ZM3.65 0.5L18.15 14.99'
				stroke={color}
				strokeOpacity='1.000000'
				strokeWidth='1.000000'
				strokeLinecap='round'
			/>
		</svg>
	)
}

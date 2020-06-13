import React from 'react';
 // import './FaceRecognition.css';
import FaceBoxes from '../FaceBoxes/FaceBoxes'

const FaceRecognition = ({ imageUrl , boxes }) => {
	// console.log('check',imageUrl)
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img  id ='inputimage' alt='' src={ imageUrl } width='500px' height='auto'/>	
	         	 <FaceBoxes boxes = {boxes} />
			</div>
		</div>
		);
		}


export default FaceRecognition;
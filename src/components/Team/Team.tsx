import { Container } from '@mui/material'
import teamMembers from '../../data/team.json'
import '../../scss/team.scss'

export default function Team() {
	return (
		<Container>
			<div className='wrapper'>
				<div className='title'>Team</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className='teamWrapper'>
					{teamMembers.map(item => (
						<div className='avatar' key={item.id}>
							<img src={item.img} alt={item.name} />
							<h3 className='name'>{item.name}</h3>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

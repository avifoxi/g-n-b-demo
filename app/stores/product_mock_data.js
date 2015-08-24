import randomKey from '../utils/randomKeyGen.js';

var _product_mock_data = [
	{
		name: 'Duck Bacon',
		categories: ['Duck'],
		description: 'Bacon ipsum dolor amet frankfurter ball tip venison corned beef, chuck shoulder sausage pig. Pastrami drumstick shank, spare ribs short loin tenderloin rump andouille cow. Swine chuck t-bone ground round. Ground round landjaeger alcatra, chicken capicola pastrami t-bone short ribs biltong jowl. Bresaola hamburger venison short ribs, frankfurter swine tongue salami bacon chicken.',
		image_urls: {
			hi_res: '/images/duck_bacon.jpeg',
			thumb: '/images/duck_bacon.jpeg'
		},
		sellable_units: [
			{
				id: randomKey(),
				price_per: 5,
				weight_per: 1,
				units_in_stock: 2
			}, 
			{
				id: randomKey(),
				price_per: 10,
				weight_per: 2,
				units_in_stock: 6
			}, 
			{
				id: randomKey(),
				price_per: 15,
				weight_per: 3,
				units_in_stock: 4
			}
		]
	},
	{
		name: 'Treif Bacon',
		category: ['Treif', 'Sale'],
		description: 'Bacon ipsum dolor amet brisket cupim venison, beef jerky ground round hamburger shoulder sausage prosciutto porchetta flank meatloaf. Flank t-bone ham hock spare ribs, bresaola short ribs tail tri-tip ball tip turkey filet mignon brisket pork belly bacon. Swine prosciutto bacon, shank ball tip tenderloin sausage boudin biltong ham shankle tongue pork belly. Cupim beef corned beef bacon turducken porchetta t-bone cow. Bacon beef alcatra picanha. Ground round kielbasa pork loin pork belly ham sausage, meatball ribeye pastrami swine. Shank salami jerky, andouille shoulder kielbasa tenderloin pork belly rump hamburger flank cow sirloin drumstick.',
		image_urls: {
			hi_res: '/images/treif_bacon.jpeg',
			thumb: '/images/treif_bacon.jpeg'
		},
		sellable_units: [
			{
				id: randomKey(),
				price_per: 4,
				weight_per: 0.75,
				units_in_stock: 2
			}, 
			{
				id: randomKey(),
				price_per: 7,
				weight_per: 1.5,
				units_in_stock: 6
			}, 
			{
				id: randomKey(),
				price_per: 9,
				weight_per: 2,
				units_in_stock: 4
			}
		]
	}
]

module.exports = _product_mock_data;
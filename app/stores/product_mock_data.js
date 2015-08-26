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
	},
	{
		name: 'Beef Bacon',
		category: ['Beef'],
		description: 'Pork chop venison drumstick landjaeger, boudin meatloaf pork belly pork loin ball tip hamburger turducken shank salami bresaola jerky. Cupim corned beef meatloaf, pork loin leberkas fatback hamburger salami tongue tail turkey cow. Filet mignon tenderloin porchetta salami shoulder, capicola kevin beef ribs pancetta short loin pastrami andouille kielbasa pork leberkas. Short loin pork belly jerky picanha frankfurter porchetta shank chuck filet mignon sausage tenderloin meatloaf. Leberkas corned beef prosciutto venison pork loin pancetta frankfurter chicken fatback ground round. Spare ribs frankfurter jowl t-bone pork chop jerky andouille meatball flank, ham hock short ribs pork loin venison. Landjaeger chicken doner strip steak salami bacon cow prosciutto.',
		image_urls: {
			hi_res: '/images/beef_bacon.jpg',
			thumb: '/images/beef_bacon.jpg'
		},
		sellable_units: [
			{
				id: randomKey(),
				price_per: 1,
				weight_per: 100,
				units_in_stock: 2
			}, 
			{
				id: randomKey(),
				price_per: 1.50,
				weight_per: 150,
				units_in_stock: 6
			}, 
			{
				id: randomKey(),
				price_per: 1.75,
				weight_per: 399,
				units_in_stock: 23
			}
		]
	},
	{
		name: 'Turkey Bacon',
		category: ['Turkey', 'Sale'],
		description: 'Bacon ipsum dolor amet beef ribs jowl filet mignon flank short ribs frankfurter. Spare ribs drumstick ground round pork loin ham, shankle short loin. Tail tongue capicola, brisket bacon kevin doner ham. Kevin leberkas pork boudin. Brisket strip steak cow, spare ribs meatloaf jerky short ribs pork chop shank picanha ham short loin flank pig chicken.',
		image_urls: {
			hi_res: '/images/turkey_bacon.jpeg',
			thumb: '/images/turkey_bacon.jpeg'
		},
		sellable_units: [
			{
				id: randomKey(),
				price_per: 9,
				weight_per: 0.25,
				units_in_stock: 19
			}, 
			{
				id: randomKey(),
				price_per: 12,
				weight_per: 0.5,
				units_in_stock: 6
			}, 
			{
				id: randomKey(),
				price_per: 15,
				weight_per: 2,
				units_in_stock: 6
			}
		]
	}
]

module.exports = _product_mock_data;
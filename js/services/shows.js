var mod = angular.module('tvchat.services.showService', []);


mod.service('ShowsService', function () {

	var self = {
		getShow: function (showId) {
			return _.findWhere(self.shows, {"showid": showId});
		},
		shows: [
			{
				"showid": 28416,
				"link": "http://tvrage.com/2_Broke_Girls",
				"name": "2 Broke Girls",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/29/28416.jpg",
				"genres": [
					"Comedy"
				],
				"network": "CBS"
			},
			{
				"showid": 38584,
				"link": "http://tvrage.com/american-crime-2014",
				"name": "American Crime (2015)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38584.jpg",
				"genres": [
					"Crime",
					"Drama"
				],
				"network": "ABC"
			},
			{
				"showid": 40452,
				"link": "http://tvrage.com/the-odyssey-2014",
				"name": "American Odyssey",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/41/40452.jpg",
				"genres": [
					"Drama",
					"Mystery",
					"Thriller"
				],
				"network": "NBC"
			},
			{
				"showid": 40136,
				"link": "http://tvrage.com/another-period",
				"name": "Another Period",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/41/40136.jpg",
				"genres": [
					"Comedy"
				],
				"network": "Comedy Central"
			},
			{
				"showid": 41728,
				"link": "http://tvrage.com/aquarius",
				"name": "Aquarius",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/42/41728.jpg",
				"genres": [
					"Crime"
				],
				"network": "NBC.com"
			},
			{
				"showid": 30715,
				"link": "http://tvrage.com/Arrow",
				"name": "Arrow",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30715.jpg",
				"genres": [
					"Action",
					"Super Heroes"
				],
				"network": "CW"
			},
			{
				"showid": 28691,
				"link": "http://tvrage.com/Awkward",
				"name": "Awkward",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/29/28691.jpg",
				"genres": [
					"Comedy",
					"Family",
					"Teens"
				],
				"network": "MTV"
			},
			{
				"showid": 30876,
				"link": "http://tvrage.com/baby-daddy",
				"name": "Baby Daddy",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30876.jpg",
				"genres": [
					"Comedy",
					"Family"
				],
				"network": "ABC Family"
			},
			{
				"showid": 38517,
				"link": "http://tvrage.com/Ballers_2015",
				"name": "Ballers (2015)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38517.jpg",
				"genres": [
					"Comedy",
					"Drama",
					"Sports"
				],
				"network": "HBO"
			},
			{
				"showid": 32210,
				"link": "http://tvrage.com/Bates_Motel",
				"name": "Bates Motel",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/33/32210.jpg",
				"genres": [
					"Horror/Supernatural",
					"Mystery",
					"Thriller"
				],
				"network": "A&E"
			},
			{
				"showid": 38079,
				"link": "http://tvrage.com/battle-creek",
				"name": "Battle Creek",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38079.jpg",
				"genres": [
					"Crime",
					"Drama"
				],
				"network": "CBS"
			},
			{
				"showid": 30717,
				"link": "http://tvrage.com/Beauty_and_the_Beast_2012",
				"name": "Beauty and the Beast (2012)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30717.jpg",
				"genres": [
					"Drama",
					"Fantasy",
					"Mystery"
				],
				"network": "CW"
			},
			{
				"showid": 44058,
				"link": "http://tvrage.com/bella-and-the-bulldogs",
				"name": "Bella and the Bulldogs",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/45/44058.jpg",
				"genres": [
					"Comedy",
					"Family",
					"Sports",
					"Teens"
				],
				"network": "nickelodeon"
			},
			{
				"showid": 47159,
				"link": "http://tvrage.com/Between",
				"name": "Between",
				"classification": "Scripted",
				"country": "CA",
				"image": "http://images.tvrage.com/shows/48/47159.jpg",
				"genres": [
					"Drama",
					"Sci-Fi",
					"Thriller"
				],
				"network": "CityTV"
			},
			{
				"showid": 37364,
				"link": "http://tvrage.com/big-time-in-hollywood-fl",
				"name": "Big Time In Hollywood, FL",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37364.jpg",
				"genres": [
					"Comedy"
				],
				"network": "Comedy Central"
			},
			{
				"showid": 38317,
				"link": "http://tvrage.com/black-ish",
				"name": "black-ish",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38317.jpg",
				"genres": [
					"Comedy"
				],
				"network": "ABC"
			},
			{
				"showid": 2870,
				"link": "http://tvrage.com/Bones",
				"name": "Bones",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/3/2870.jpg",
				"genres": [
					"Comedy",
					"Crime",
					"Drama"
				],
				"network": "FOX"
			},
			{
				"showid": 35774,
				"link": "http://tvrage.com/brooklyn-nine-nine",
				"name": "Brooklyn Nine-Nine",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35774.jpg",
				"genres": [
					"Comedy"
				],
				"network": "FOX"
			},
			{
				"showid": 19267,
				"link": "http://tvrage.com/Castle",
				"name": "Castle (2009)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/20/19267.jpg",
				"genres": [
					"Crime",
					"Drama",
					"Mystery"
				],
				"network": "ABC"
			},
			{
				"showid": 30748,
				"link": "http://tvrage.com/Chicago_Fire",
				"name": "Chicago Fire",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30748.jpg",
				"genres": [
					"Action",
					"Adventure",
					"Drama"
				],
				"network": "NBC"
			},
			{
				"showid": 35802,
				"link": "http://tvrage.com/chicago-pd",
				"name": "Chicago P.D.",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35802.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama"
				],
				"network": "NBC"
			},
			{
				"showid": 37494,
				"link": "http://tvrage.com/complications",
				"name": "Complications",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37494.jpg",
				"genres": [
					"Drama",
					"Medical",
					"Thriller"
				],
				"network": "USA Network"
			},
			{
				"showid": 41239,
				"link": "http://tvrage.com/csi-cyber",
				"name": "CSI: Cyber",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/42/41239.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama"
				],
				"network": "CBS"
			},
			{
				"showid": 32724,
				"link": "http://tvrage.com/Da_Vincis_Demons",
				"name": "Da Vinci's Demons",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/33/32724.jpg",
				"genres": [
					"Adventure",
					"Drama",
					"Fantasy",
					"History"
				],
				"network": "starz"
			},
			{
				"showid": 47282,
				"link": "http://tvrage.com/shows/id-47282",
				"name": "Dark Matter",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/48/47282.jpg",
				"genres": [
					"Drama",
					"Sci-Fi",
					"Thriller"
				],
				"network": "Syfy"
			},
			{
				"showid": 3256,
				"link": "http://tvrage.com/Days_of_our_Lives",
				"name": "Days of our Lives",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/4/3256.jpg",
				"genres": [
					"Drama",
					"Soaps"
				],
				"network": "NBC"
			},
			{
				"showid": 30724,
				"link": "http://tvrage.com/Defiance",
				"name": "Defiance",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30724.jpg",
				"genres": [
					"Action",
					"Drama",
					"Sci-Fi"
				],
				"network": "Syfy"
			},
			{
				"showid": 30826,
				"link": "http://tvrage.com/Devious_Maids",
				"name": "Devious Maids",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30826.png",
				"genres": [
					"Drama"
				],
				"network": "Lifetime"
			},
			{
				"showid": 31385,
				"link": "http://tvrage.com/dog-with-a-blog",
				"name": "Dog with a Blog",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/32/31385.jpg",
				"genres": [
					"Comedy",
					"Family",
					"Animals/Pets"
				],
				"network": "DiSNEY CHANNEL"
			},
			{
				"showid": 36889,
				"link": "http://tvrage.com/dominion",
				"name": "Dominion",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/37/36889.png",
				"genres": [
					"Action",
					"Drama",
					"Horror/Supernatural"
				],
				"network": "Syfy"
			},
			{
				"showid": 30750,
				"link": "http://tvrage.com/Elementary",
				"name": "Elementary",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30750.jpg",
				"genres": [
					"Crime",
					"Drama",
					"Mystery"
				],
				"network": "CBS"
			},
			{
				"showid": 37050,
				"link": "http://tvrage.com/extant",
				"name": "Extant",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37050.jpg",
				"genres": [
					"Drama",
					"Sci-Fi",
					"Thriller"
				],
				"network": "CBS"
			},
			{
				"showid": 37425,
				"link": "http://tvrage.com/faking-it-2014",
				"name": "Faking It (2014)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37425.jpg",
				"genres": [
					"Comedy",
					"Romance/Dating",
					"Teens"
				],
				"network": "MTV"
			},
			{
				"showid": 26205,
				"link": "http://tvrage.com/Falling_Skies",
				"name": "Falling Skies",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/27/26205.jpg",
				"genres": [
					"Action",
					"Military/War",
					"Mystery",
					"Sci-Fi"
				],
				"network": "TNT DRAMA"
			},
			{
				"showid": 48384,
				"link": "http://tvrage.com/shows/id-48384",
				"name": "Fear The Walking Dead",
				"classification": "Mini-Series",
				"country": "US",
				"image": "http://images.tvrage.com/shows/49/48384.jpg",
				"genres": [
					"Action",
					"Drama",
					"Horror/Supernatural"
				],
				"network": "amc"
			},
			{
				"showid": 37811,
				"link": "http://tvrage.com/finding-carter",
				"name": "Finding Carter",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37811.jpg",
				"genres": [
					"Drama",
					"Teens"
				],
				"network": "MTV"
			},
			{
				"showid": 39079,
				"link": "http://tvrage.com/flesh-and-bone",
				"name": "Flesh And Bone",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/40/39079.jpg",
				"genres": [
					"Dance",
					"Drama"
				],
				"network": "starz"
			},
			{
				"showid": 35482,
				"link": "http://tvrage.com/full-circle-2013",
				"name": "Full Circle (2013)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35482.jpg",
				"genres": [
					"Drama",
					"Family"
				],
				"network": "AUDIENCE NETWORK"
			},
			{
				"showid": 24493,
				"link": "http://tvrage.com/Game_of_Thrones",
				"name": "Game of Thrones",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/25/24493.png",
				"genres": [
					"Adventure",
					"Drama",
					"Fantasy",
					"Literature"
				],
				"network": "HBO"
			},
			{
				"showid": 3653,
				"link": "http://tvrage.com/General_Hospital_US",
				"name": "General Hospital (US)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/4/3653.jpg",
				"genres": [
					"Soaps"
				],
				"network": "ABC"
			},
			{
				"showid": 33436,
				"link": "http://tvrage.com/girl-meets-world",
				"name": "Girl Meets World",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33436.jpg",
				"genres": [
					"Children",
					"Comedy",
					"Family",
					"Teens"
				],
				"network": "DiSNEY CHANNEL"
			},
			{
				"showid": 41466,
				"link": "http://tvrage.com/grace-and-frankie",
				"name": "Grace and Frankie",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/42/41466.jpg",
				"genres": [
					"Comedy"
				],
				"network": "Netflix"
			},
			{
				"showid": 32188,
				"link": "http://tvrage.com/Graceland",
				"name": "Graceland",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/33/32188.jpg",
				"genres": [
					"Drama"
				],
				"network": "USA Network"
			},
			{
				"showid": 3741,
				"link": "http://tvrage.com/Greys_Anatomy",
				"name": "Grey's Anatomy",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/4/3741.jpg",
				"genres": [
					"Drama",
					"Medical"
				],
				"network": "ABC"
			},
			{
				"showid": 28352,
				"link": "http://tvrage.com/Grimm",
				"name": "Grimm",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/29/28352.jpg",
				"genres": [
					"Drama",
					"Horror/Supernatural"
				],
				"network": "NBC"
			},
			{
				"showid": 33630,
				"link": "http://tvrage.com/halt-and-catch-fire",
				"name": "Halt and Catch Fire",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33630.jpg",
				"genres": [
					"Drama"
				],
				"network": "amc"
			},
			{
				"showid": 30909,
				"link": "http://tvrage.com/Hannibal",
				"name": "Hannibal",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30909.jpg",
				"genres": [
					"Crime",
					"Drama",
					"Thriller"
				],
				"network": "NBC"
			},
			{
				"showid": 36946,
				"link": "http://tvrage.com/happyish",
				"name": "Happyish",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/37/36946.jpg",
				"genres": [
					"Comedy",
					"Drama"
				],
				"network": "SHOWTIME"
			},
			{
				"showid": 24840,
				"link": "http://tvrage.com/Hawaii_Five-0",
				"name": "Hawaii Five-0",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/25/24840.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama",
					"Thriller"
				],
				"network": "CBS"
			},
			{
				"showid": 43498,
				"link": "http://tvrage.com/henry-danger",
				"name": "Henry Danger",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/44/43498.jpg",
				"genres": [
					"Action",
					"Adventure",
					"Comedy",
					"Super Heroes",
					"Teens"
				],
				"network": "nickelodeon"
			},
			{
				"showid": 24846,
				"link": "http://tvrage.com/Hot_In_Cleveland",
				"name": "Hot In Cleveland",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/25/24846.jpg",
				"genres": [
					"Comedy",
					"Family"
				],
				"network": "TVland"
			},
			{
				"showid": 42969,
				"link": "http://tvrage.com/if-loving-you-is-wrong",
				"name": "If Loving You is Wrong",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/43/42969.jpg",
				"genres": [
					"Drama"
				],
				"network": "OPRAH WINFREY NETWORK"
			},
			{
				"showid": 48018,
				"link": "http://tvrage.com/shows/id-48018",
				"name": "Impress Me",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/49/48018.jpg",
				"genres": [
					"Comedy"
				],
				"network": "Pop TV"
			},
			{
				"showid": 33821,
				"link": "http://tvrage.com/inside-amy-schumer",
				"name": "Inside Amy Schumer",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33821.jpg",
				"genres": [
					"Comedy",
					"Romance/Dating",
					"Sketch/Improv"
				],
				"network": "Comedy Central"
			},
			{
				"showid": 32519,
				"link": "http://tvrage.com/instant-mom",
				"name": "Instant Mom",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/33/32519.jpg",
				"genres": [
					"Comedy",
					"Drama",
					"Family"
				],
				"network": "TVland"
			},
			{
				"showid": 38804,
				"link": "http://tvrage.com/izombie",
				"name": "iZombie",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38804.png",
				"genres": [
					"Comedy",
					"Crime",
					"Drama",
					"Horror/Supernatural"
				],
				"network": "CW"
			},
			{
				"showid": 36552,
				"link": "http://tvrage.com/jane-the-virgin",
				"name": "Jane The Virgin",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/37/36552.jpg",
				"genres": [
					"Comedy",
					"Drama",
					"Family"
				],
				"network": "CW"
			},
			{
				"showid": 29355,
				"link": "http://tvrage.com/jessie-2011",
				"name": "Jessie (2011)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/30/29355.jpg",
				"genres": [
					"Comedy",
					"Family",
					"Teens"
				],
				"network": "DiSNEY CHANNEL"
			},
			{
				"showid": 49007,
				"link": "http://tvrage.com/shows/id-49007",
				"name": "Just The Way You Are",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/50/49007.jpg",
				"genres": [
					"Drama",
					"Romance/Dating"
				],
				"network": "Hallmark CHANNEL"
			},
			{
				"showid": 47213,
				"link": "http://tvrage.com/shows/id-47213",
				"name": "K.C. Undercover",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/48/47213.jpg",
				"genres": [
					"Comedy"
				],
				"network": "DiSNEY CHANNEL"
			},
			{
				"showid": 38299,
				"link": "http://tvrage.com/killjoys",
				"name": "Killjoys",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38299.jpg",
				"genres": [
					"Adventure",
					"Drama",
					"Sci-Fi"
				],
				"network": "Syfy"
			},
			{
				"showid": 4204,
				"link": "http://tvrage.com/Law_And_Order_SVU",
				"name": "Law & Order: Special Victims Unit",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/5/4204.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama"
				],
				"network": "NBC"
			},
			{
				"showid": 33288,
				"link": "http://tvrage.com/legends-tnt",
				"name": "Legends (TNT)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33288.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama"
				],
				"network": "TNT DRAMA"
			},
			{
				"showid": 24504,
				"link": "http://tvrage.com/Louie",
				"name": "Louie",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/25/24504.jpg",
				"genres": [
					"Comedy",
					"Sketch/Improv"
				],
				"network": "FX"
			},
			{
				"showid": 16356,
				"link": "http://tvrage.com/Mad_Men",
				"name": "Mad Men",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/17/16356.jpg",
				"genres": [
					"Drama"
				],
				"network": "amc"
			},
			{
				"showid": 28497,
				"link": "http://tvrage.com/Major_Crimes",
				"name": "Major Crimes",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/29/28497.jpg",
				"genres": [
					"Crime",
					"Drama",
					"Mystery"
				],
				"network": "TNT DRAMA"
			},
			{
				"showid": 42355,
				"link": "http://tvrage.com/mann-wife",
				"name": "Mann & Wife",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/43/42355.jpg",
				"genres": [
					"Comedy"
				],
				"network": "BOUNCE TV"
			},
			{
				"showid": 48604,
				"link": "http://tvrage.com/shows/id-48604",
				"name": "Mansions and Murders",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/49/48604.jpg",
				"genres": [
					"Crime",
					"Drama",
					"Mystery"
				],
				"network": "Investigation Discovery"
			},
			{
				"showid": 33285,
				"link": "http://tvrage.com/Maron",
				"name": "Maron",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33285.jpg",
				"genres": [
					"Comedy",
					"Family"
				],
				"network": "IFC"
			},
			{
				"showid": 40423,
				"link": "http://tvrage.com/married",
				"name": "Married",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/41/40423.jpg",
				"genres": [
					"Comedy"
				],
				"network": "FX"
			},
			{
				"showid": 32656,
				"link": "http://tvrage.com/SHIELD",
				"name": "Marvel's Agents of S.H.I.E.L.D.",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/33/32656.jpg",
				"genres": [
					"Action",
					"Spy/Espionage",
					"Super Heroes"
				],
				"network": "ABC"
			},
			{
				"showid": 32002,
				"link": "http://tvrage.com/masters-of-sex",
				"name": "Masters of Sex",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/33/32002.jpg",
				"genres": [
					"Drama",
					"History"
				],
				"network": "SHOWTIME"
			},
			{
				"showid": 48987,
				"link": "http://tvrage.com/shows/id-48987",
				"name": "Mega Shark vs. Kolossus",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/49/48987.jpg",
				"genres": [
					"Action",
					"Horror/Supernatural",
					"Sci-Fi"
				],
				"network": "Syfy"
			},
			{
				"showid": 25864,
				"link": "http://tvrage.com/Melissa_And_Joey",
				"name": "Melissa & Joey",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/26/25864.jpg",
				"genres": [
					"Comedy"
				],
				"network": "ABC Family"
			},
			{
				"showid": 25050,
				"link": "http://tvrage.com/Mike_And_Molly",
				"name": "Mike & Molly",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/26/25050.jpg",
				"genres": [
					"Comedy",
					"Family"
				],
				"network": "CBS"
			},
			{
				"showid": 30882,
				"link": "http://tvrage.com/Mistresses_US",
				"name": "Mistresses (US)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30882.jpg",
				"genres": [
					"Drama"
				],
				"network": "ABC"
			},
			{
				"showid": 22622,
				"link": "http://tvrage.com/Modern_Family",
				"name": "Modern Family",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/23/22622.png",
				"genres": [
					"Comedy"
				],
				"network": "ABC"
			},
			{
				"showid": 39916,
				"link": "http://tvrage.com/mr-robinson",
				"name": "Mr. Robinson",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/40/39916.jpg",
				"genres": [
					"Comedy",
					"Music",
					"Teens"
				],
				"network": "NBC"
			},
			{
				"showid": 42422,
				"link": "http://tvrage.com/mr-robot",
				"name": "Mr. Robot",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/43/42422.jpg",
				"genres": [
					"Crime",
					"Drama"
				],
				"network": "USA Network"
			},
			{
				"showid": 35032,
				"link": "http://tvrage.com/murder-in-the-first",
				"name": "Murder In The First",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35032.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama",
					"Family"
				],
				"network": "TNT DRAMA"
			},
			{
				"showid": 30808,
				"link": "http://tvrage.com/Nashville",
				"name": "Nashville",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30808.jpg",
				"genres": [
					"Drama",
					"Music"
				],
				"network": "ABC"
			},
			{
				"showid": 4628,
				"link": "http://tvrage.com/NCIS",
				"name": "NCIS",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/5/4628.jpg",
				"genres": [
					"Crime",
					"Mystery"
				],
				"network": "CBS"
			},
			{
				"showid": 21934,
				"link": "http://tvrage.com/NCIS_Los_Angeles",
				"name": "NCIS: Los Angeles",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/22/21934.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama"
				],
				"network": "CBS"
			},
			{
				"showid": 38017,
				"link": "http://tvrage.com/ncis-new-orleans",
				"name": "NCIS: New Orleans",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38017.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama"
				],
				"network": "CBS"
			},
			{
				"showid": 19651,
				"link": "http://tvrage.com/Nurse_Jackie",
				"name": "Nurse Jackie",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/20/19651.jpg",
				"genres": [
					"Comedy",
					"Drama",
					"Medical",
					"Thriller"
				],
				"network": "SHOWTIME"
			},
			{
				"showid": 42179,
				"link": "http://tvrage.com/odd-mom-out",
				"name": "Odd Mom Out",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/43/42179.jpg",
				"genres": [
					"Comedy"
				],
				"network": "Bravo"
			},
			{
				"showid": 41889,
				"link": "http://tvrage.com/olympus-syfy",
				"name": "Olympus (Syfy)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/42/41889.jpg",
				"genres": [
					"Action",
					"Adventure",
					"Drama",
					"Horror/Supernatural"
				],
				"network": "Syfy"
			},
			{
				"showid": 28385,
				"link": "http://tvrage.com/Once_Upon_a_Time",
				"name": "Once Upon a Time",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/29/28385.jpg",
				"genres": [
					"Drama",
					"Fantasy"
				],
				"network": "ABC"
			},
			{
				"showid": 32950,
				"link": "http://tvrage.com/Orange_is_the_New_Black",
				"name": "Orange is the New Black",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/33/32950.jpg",
				"genres": [
					"Comedy",
					"Crime"
				],
				"network": "Netflix"
			},
			{
				"showid": 36202,
				"link": "http://tvrage.com/outlander",
				"name": "Outlander",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/37/36202.jpg",
				"genres": [
					"Action",
					"Drama",
					"History",
					"Literature",
					"Military/War",
					"Romance/Dating",
					"Sci-Fi"
				],
				"network": "starz"
			},
			{
				"showid": 34172,
				"link": "http://tvrage.com/Penny_Dreadful",
				"name": "Penny Dreadful",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/35/34172.jpg",
				"genres": [
					"Drama",
					"Horror/Supernatural",
					"Thriller"
				],
				"network": "SHOWTIME"
			},
			{
				"showid": 35945,
				"link": "http://tvrage.com/playing-house",
				"name": "Playing House",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35945.jpg",
				"genres": [
					"Comedy"
				],
				"network": "USA Network"
			},
			{
				"showid": 36399,
				"link": "http://tvrage.com/Power",
				"name": "Power (2014)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/37/36399.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama",
					"Family",
					"Thriller"
				],
				"network": "starz"
			},
			{
				"showid": 25591,
				"link": "http://tvrage.com/Pretty_Little_Liars",
				"name": "Pretty Little Liars",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/26/25591.jpg",
				"genres": [
					"Drama",
					"Mystery",
					"Teens"
				],
				"network": "ABC Family"
			},
			{
				"showid": 36943,
				"link": "http://tvrage.com/proof-tnt",
				"name": "Proof (TNT)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/37/36943.jpg",
				"genres": [
					"Drama",
					"Horror/Supernatural",
					"Medical",
					"Mystery"
				],
				"network": "TNT DRAMA"
			},
			{
				"showid": 38664,
				"link": "http://tvrage.com/public-morals-2014",
				"name": "Public Morals",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38664.jpg",
				"genres": [
					"Crime",
					"Drama"
				],
				"network": "TNT DRAMA"
			},
			{
				"showid": 30309,
				"link": "http://tvrage.com/Ray_Donovan",
				"name": "Ray Donovan",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/31/30309.jpg",
				"genres": [
					"Crime",
					"Drama"
				],
				"network": "SHOWTIME"
			},
			{
				"showid": 34590,
				"link": "http://tvrage.com/Reign",
				"name": "Reign",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/35/34590.jpg",
				"genres": [
					"Drama",
					"History"
				],
				"network": "CW"
			},
			{
				"showid": 28387,
				"link": "http://tvrage.com/Revenge",
				"name": "Revenge",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/29/28387.jpg",
				"genres": [
					"Drama",
					"Thriller"
				],
				"network": "ABC"
			},
			{
				"showid": 24996,
				"link": "http://tvrage.com/Rizzoli_And_Isles",
				"name": "Rizzoli & Isles",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/25/24996.jpg",
				"genres": [
					"Crime",
					"Drama"
				],
				"network": "TNT DRAMA"
			},
			{
				"showid": 36241,
				"link": "http://tvrage.com/salem",
				"name": "Salem",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/37/36241.jpg",
				"genres": [
					"Drama",
					"Thriller"
				],
				"network": "WGN america"
			},
			{
				"showid": 28398,
				"link": "http://tvrage.com/Scandal",
				"name": "Scandal",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/29/28398.jpg",
				"genres": [
					"Drama",
					"Thriller"
				],
				"network": "ABC"
			},
			{
				"showid": 35610,
				"link": "http://tvrage.com/scream",
				"name": "Scream: The TV Series",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35610.jpg",
				"genres": [
					"Comedy",
					"Drama",
					"Mystery",
					"Thriller"
				],
				"network": "MTV"
			},
			{
				"showid": 19354,
				"link": "http://tvrage.com/scream-queens",
				"name": "Scream Queens (2010)",
				"classification": "Reality",
				"country": "US",
				"image": "http://images.tvrage.com/shows/20/19354.jpg",
				"genres": [
					"Comedy",
					"Family",
					"Talent",
					"Thriller"
				],
				"network": "VH1"
			},
			{
				"showid": 35197,
				"link": "http://tvrage.com/sense8",
				"name": "Sense8",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35197.jpg",
				"genres": [
					"Action",
					"Drama",
					"Romance/Dating",
					"Sci-Fi"
				],
				"network": "Netflix"
			},
			{
				"showid": 39953,
				"link": "http://tvrage.com/sex-drugs-rock-roll",
				"name": "Sex&Drugs&Rock&Roll",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/40/39953.jpg",
				"genres": [
					"Celebrities",
					"Comedy",
					"Music",
					"Talent"
				],
				"network": "FX"
			},
			{
				"showid": 43512,
				"link": "http://tvrage.com/sharknado-3-super-nova",
				"name": "Sharknado 3: Oh Hell No!",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/44/43512.jpg",
				"genres": [
					"Action",
					"Drama",
					"Sci-Fi"
				],
				"network": "Syfy"
			},
			{
				"showid": 35139,
				"link": "http://tvrage.com/signed-sealed-delivered",
				"name": "Signed, Sealed, Delivered",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35139.jpg",
				"genres": [
					"Drama",
					"Family",
					"Mystery"
				],
				"network": "Hallmark MOVIES & MYSTERIES"
			},
			{
				"showid": 48614,
				"link": "http://tvrage.com/shows/id-48614",
				"name": "Significant Mother",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/49/48614.jpg",
				"genres": [
					"Comedy"
				],
				"network": "CW"
			},
			{
				"showid": 33759,
				"link": "http://tvrage.com/silicon-valley",
				"name": "Silicon Valley",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33759.jpg",
				"genres": [
					"Comedy",
					"Drama",
					"Tech/Gaming"
				],
				"network": "HBO"
			},
			{
				"showid": 41213,
				"link": "http://tvrage.com/stalker",
				"name": "Stalker",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/42/41213.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama",
					"Thriller"
				],
				"network": "CBS"
			},
			{
				"showid": 42080,
				"link": "http://tvrage.com/stitchers",
				"name": "Stitchers",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/43/42080.png",
				"genres": [
					"Drama",
					"Mystery",
					"Sci-Fi"
				],
				"network": "ABC Family"
			},
			{
				"showid": 27518,
				"link": "http://tvrage.com/Suits",
				"name": "Suits",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/28/27518.jpg",
				"genres": [
					"Drama",
					"Finance"
				],
				"network": "USA Network"
			},
			{
				"showid": 44824,
				"link": "http://tvrage.com/supergirl",
				"name": "Supergirl",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/45/44824.jpg",
				"genres": [
					"Action",
					"Adventure",
					"Drama",
					"Super Heroes"
				],
				"network": "CBS"
			},
			{
				"showid": 5410,
				"link": "http://tvrage.com/Supernatural",
				"name": "Supernatural",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/6/5410.jpg",
				"genres": [
					"Action",
					"Adventure",
					"Drama",
					"Horror/Supernatural"
				],
				"network": "CW"
			},
			{
				"showid": 27575,
				"link": "http://tvrage.com/Teen_Wolf",
				"name": "Teen Wolf",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/28/27575.jpg",
				"genres": [
					"Drama",
					"Horror/Supernatural",
					"Teens"
				],
				"network": "MTV"
			},
			{
				"showid": 24703,
				"link": "http://tvrage.com/frank-the-entertainer-in-a-basement-affa",
				"name": "Frank the Entertainer...in a Basement Affair",
				"classification": "Reality",
				"country": "US",
				"image": "http://images.tvrage.com/shows/25/24703.jpg",
				"genres": [
					"Family",
					"Romance/Dating"
				],
				"network": "VH1"
			},
			{
				"showid": 38462,
				"link": "http://tvrage.com/the-astronaut-wives-club",
				"name": "The Astronaut Wives Club",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38462.jpg",
				"genres": [
					"Drama"
				],
				"network": "ABC"
			},
			{
				"showid": 35048,
				"link": "http://tvrage.com/The_Blacklist",
				"name": "The Blacklist",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35048.jpg",
				"genres": [
					"Action",
					"Crime",
					"Drama"
				],
				"network": "NBC"
			},
			{
				"showid": 5631,
				"link": "http://tvrage.com/The_Bold_and_the_Beautiful",
				"name": "The Bold and the Beautiful",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/6/5631.jpg",
				"genres": [
					"Drama",
					"Soaps"
				],
				"network": "CBS"
			},
			{
				"showid": 37973,
				"link": "http://tvrage.com/the-brink",
				"name": "The Brink",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37973.jpg",
				"genres": [
					"Comedy",
					"Military/War"
				],
				"network": "HBO"
			},
			{
				"showid": 32630,
				"link": "http://tvrage.com/comedians-in-cars-getting-coffee",
				"name": "Comedians in Cars Getting Coffee",
				"classification": "Talk Shows",
				"country": "US",
				"image": "http://images.tvrage.com/shows/33/32630.jpg",
				"genres": [
					"Automobiles/Vehicles",
					"Celebrities",
					"Comedy",
					"Cooking/Food",
					"Interview"
				],
				"network": "Crackle"
			},
			{
				"showid": 20798,
				"link": "http://tvrage.com/FlashForward",
				"name": "FlashForward",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/21/20798.jpg",
				"genres": [
					"Drama",
					"Sci-Fi"
				],
				"network": "ABC"
			},
			{
				"showid": 36538,
				"link": "http://tvrage.com/following-the-traveller-millions",
				"name": "Following the Traveller Millions",
				"classification": "Documentary",
				"country": "UK",
				"image": "http://images.tvrage.com/shows/37/36538.jpg",
				"genres": [
					"Family",
					"Finance",
					"Lifestyle"
				],
				"network": "Channel 5"
			},
			{
				"showid": 35814,
				"link": "http://tvrage.com/the-goldbergs-2013",
				"name": "The Goldbergs (2013)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35814.jpg",
				"genres": [
					"Comedy"
				],
				"network": "ABC"
			},
			{
				"showid": 22755,
				"link": "http://tvrage.com/The_Good_Wife",
				"name": "The Good Wife",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/23/22755.jpg",
				"genres": [
					"Drama",
					"Family",
					"Politics"
				],
				"network": "CBS"
			},
			{
				"showid": 33158,
				"link": "http://tvrage.com/the-last-ship",
				"name": "The Last Ship",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33158.jpg",
				"genres": [
					"Action",
					"Adventure",
					"Thriller"
				],
				"network": "TNT DRAMA"
			},
			{
				"showid": 40715,
				"link": "http://tvrage.com/the-messengers",
				"name": "The Messengers",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/41/40715.jpg",
				"genres": [
					"Drama",
					"Horror/Supernatural"
				],
				"network": "CW"
			},
			{
				"showid": 37263,
				"link": "http://tvrage.com/the-mysteries-of-laura",
				"name": "The Mysteries Of Laura",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37263.jpg",
				"genres": [
					"Drama",
					"Family"
				],
				"network": "NBC"
			},
			{
				"showid": 35812,
				"link": "http://tvrage.com/The_Night_Shift",
				"name": "The Night Shift",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35812.jpg",
				"genres": [
					"Drama",
					"Medical"
				],
				"network": "NBC"
			},
			{
				"showid": 6057,
				"link": "http://tvrage.com/The_Odd_Couple",
				"name": "The Odd Couple (1970)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/7/6057.jpg",
				"genres": [
					"Comedy"
				],
				"network": "ABC"
			},
			{
				"showid": 46339,
				"link": "http://tvrage.com/shows/id-46339",
				"name": "The Originals: The Awakening",
				"classification": "Mini-Series",
				"country": "US",
				"image": "http://images.tvrage.com/shows/47/46339.jpg",
				"genres": [
					"Horror/Supernatural"
				],
				"network": "CW"
			},
			{
				"showid": 45565,
				"link": "http://tvrage.com/the-pinkertons",
				"name": "The Pinkertons",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/46/45565.jpg",
				"genres": [
					"Mystery",
					"Western"
				],
				"network": "Syndicated"
			},
			{
				"showid": 38126,
				"link": "http://tvrage.com/the-returned-us",
				"name": "The Returned (US)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38126.jpg",
				"genres": [
					"Drama",
					"Horror/Supernatural"
				],
				"network": "A&E"
			},
			{
				"showid": 31547,
				"link": "http://tvrage.com/the-soul-man",
				"name": "The Soul Man",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/32/31547.jpg",
				"genres": [
					"Comedy",
					"Family"
				],
				"network": "TVland"
			},
			{
				"showid": 33229,
				"link": "http://tvrage.com/the-strain",
				"name": "The Strain",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33229.jpg",
				"genres": [
					"Drama",
					"Horror/Supernatural"
				],
				"network": "FX"
			},
			{
				"showid": 21766,
				"link": "http://tvrage.com/The_Vampire_Diaries",
				"name": "The Vampire Diaries",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/22/21766.jpg",
				"genres": [
					"Drama",
					"Fantasy",
					"Horror/Supernatural",
					"Romance/Dating"
				],
				"network": "CW"
			},
			{
				"showid": 40412,
				"link": "http://tvrage.com/the-whispers",
				"name": "The Whispers",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/41/40412.jpg",
				"genres": [
					"Mystery",
					"Sci-Fi"
				],
				"network": "ABC"
			},
			{
				"showid": 6318,
				"link": "http://tvrage.com/The_Young_and_the_Restless",
				"name": "The Young and the Restless",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/7/6318.jpg",
				"genres": [
					"Drama",
					"Soaps"
				],
				"network": "CBS"
			},
			{
				"showid": 31369,
				"link": "http://tvrage.com/true-detective",
				"name": "True Detective",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/32/31369.jpg",
				"genres": [
					"Crime",
					"Drama"
				],
				"network": "HBO"
			},
			{
				"showid": 33631,
				"link": "http://tvrage.com/turn",
				"name": "TURN",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33631.jpg",
				"genres": [
					"Drama",
					"History",
					"Spy/Espionage"
				],
				"network": "amc"
			},
			{
				"showid": 29455,
				"link": "http://tvrage.com/tyler-perry-s-for-better-or-worse",
				"name": "Tyler Perry's For Better Or Worse",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/30/29455.jpg",
				"genres": [
					"Comedy",
					"Drama"
				],
				"network": "OPRAH WINFREY NETWORK"
			},
			{
				"showid": 33816,
				"link": "http://tvrage.com/tyrant",
				"name": "Tyrant",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/34/33816.jpg",
				"genres": [
					"Drama",
					"Politics"
				],
				"network": "FX"
			},
			{
				"showid": 37012,
				"link": "http://tvrage.com/unreal",
				"name": "UnREAL",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37012.jpg",
				"genres": [
					"Drama",
					"Family",
					"Lifestyle",
					"Romance/Dating"
				],
				"network": "Lifetime"
			},
			{
				"showid": 34328,
				"link": "http://tvrage.com/undateable-2014",
				"name": "Undateable (2014)",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/35/34328.jpg",
				"genres": [
					"Comedy",
					"Family",
					"Romance/Dating"
				],
				"network": "NBC"
			},
			{
				"showid": 25988,
				"link": "http://tvrage.com/Under_the_Dome",
				"name": "Under the Dome",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/26/25988.jpg",
				"genres": [
					"Drama",
					"Sci-Fi",
					"Thriller"
				],
				"network": "CBS"
			},
			{
				"showid": 28149,
				"link": "http://tvrage.com/Veep",
				"name": "Veep",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/29/28149.jpg",
				"genres": [
					"Comedy",
					"Politics"
				],
				"network": "HBO"
			},
			{
				"showid": 34145,
				"link": "http://tvrage.com/wayward-pines",
				"name": "Wayward Pines",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/35/34145.jpg",
				"genres": [
					"Drama",
					"Mystery",
					"Sci-Fi"
				],
				"network": "FOX"
			},
			{
				"showid": 43844,
				"link": "http://tvrage.com/wet-hot-american-summer",
				"name": "Wet Hot American Summer: First Day of Camp",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/44/43844.jpg",
				"genres": [
					"Action",
					"Adventure",
					"Comedy",
					"Lifestyle"
				],
				"network": "Netflix"
			},
			{
				"showid": 35137,
				"link": "http://tvrage.com/when-calls-the-heart",
				"name": "When Calls the Heart",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/36/35137.jpg",
				"genres": [
					"Drama",
					"Family",
					"Romance/Dating"
				],
				"network": "Hallmark CHANNEL"
			},
			{
				"showid": 37401,
				"link": "http://tvrage.com/young-hungry",
				"name": "Young & Hungry",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37401.jpg",
				"genres": [
					"Comedy",
					"Cooking/Food",
					"Family"
				],
				"network": "ABC Family"
			},
			{
				"showid": 37246,
				"link": "http://tvrage.com/younger",
				"name": "Younger",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/38/37246.jpg",
				"genres": [
					"Comedy"
				],
				"network": "TVland"
			},
			{
				"showid": 40854,
				"link": "http://tvrage.com/your-family-or-mine",
				"name": "Your Family Or Mine",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/41/40854.jpg",
				"genres": [
					"Comedy",
					"Family"
				],
				"network": "tbs"
			},
			{
				"showid": 38262,
				"link": "http://tvrage.com/shows/id-38262",
				"name": "Zoo",
				"classification": "Scripted",
				"country": "US",
				"image": "http://images.tvrage.com/shows/39/38262.jpg",
				"genres": [
					"Drama",
					"Sci-Fi",
					"Thriller"
				],
				"network": "CBS"
			}
		]
	};
	return self;
});
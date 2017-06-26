var simplemaps_usmap_mapdata = {

	main_settings:{
		//General settings
		width: 'responsive', //or 'responsive'
		background_color: '#FFFFFF',
		background_transparent: 'no',
		border_color: '#ffffff',
		popups: 'detect', //on_click, on_hover, or detect

		//State defaults
		state_description: '<hr class="state" />Learn more about <span class="stateProjects"></span> energy efficiency and renewable energy projects and weatherization activities supported by the Weatherization and Intergovernmental Programs Office.',
		state_color: '#0B5E90',
		state_hover_color: '#00A4E4',
		state_url: '',
		border_size: 1.5,
		all_states_inactive: 'no',
		all_states_zoomable: 'no',

		//Location defaults
		location_description:  'Location description',
		location_color: '#FF0067',
		location_opacity: .8,
		location_hover_opacity: 1,
		location_url: '',
		location_size: 25,
		location_type: 'square', // circle, square, image
		location_image_source: 'frog.png', //name of image in the map_images folder
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',

		//Labels
		label_color: '#d5ddec',
		label_hover_color: '#d5ddec',
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
		hide_eastern_labels: 'no',

		//Zoom settings
		zoom: 'yes', //use default regions
		back_image: 'no',   //Use image instead of arrow for back zoom
		arrow_color: '#3B729F',
		arrow_color_border: '#88A4BC',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds

		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css

		//Advanced settings
		div: 'map',
		auto_load: 'no',
		url_new_tab: 'yes',
		images_directory: 'default', //e.g. 'map_images/'
		fade_time:  .1, //time to fade out
		link_text: '(Link)'  //Text mobile browsers will see for links

	},

	state_specific:{
		"HI": {
			name: 'Hawaii',
			description: 'default',
			url: 'https://energy.gov/node/2153467'
		},
		"AK": {
			name: 'Alaska',
			description: 'default',
			url: 'https://energy.gov/node/2153435'
			},
		"FL": {
			name: 'Florida',
			description: 'default',
			url: 'https://energy.gov/node/2153459'
			},
		"NH": {
			name: 'New Hampshire',
			description: 'default',
			url: 'https://energy.gov/node/2260109'
			},
		"VT": {
			name: 'Vermont',
			description: 'default',
			url: 'https://energy.gov/node/2260121'
			},
		"ME": {
			name: 'Maine',
			description: 'default',
			url: 'https://energy.gov/node/2260085'
			},
		"RI": {
			name: 'Rhode Island',
			description: 'default',
			url: 'https://energy.gov/node/2260117'
			},
		"NY": {
			name: 'New York',
			description: 'default',
			url: 'https://energy.gov/node/2191974'
		},
		"PA": {
			name: 'Pennsylvania',
			description: 'default',
			url: 'https://energy.gov/node/2192342'
			},
		"NJ": {
			name: 'New Jersey',
			description: 'default',
			url: 'https://energy.gov/node/2260113'
			},
		"DE": {
			name: 'Delaware',
			description: 'default',
			url: 'https://energy.gov/node/2260069'
			},
		"MD": {
			name: 'Maryland',
			description: 'default',
			url: 'https://energy.gov/node/2260089'
			},
		"VA": {
			name: 'Virginia',
			description: 'default',
			url: 'https://energy.gov/node/2193246'
			},
		"WV": {
			name: 'West Virginia',
			description: 'default',
			url: 'https://energy.gov/node/2193270'
			},
		"OH": {
			name: 'Ohio',
			description: 'default',
			url: 'https://energy.gov/node/2191986'
			},
		"IN": {
			name: 'Indiana',
			description: 'default',
			url: 'https://energy.gov/node/2153479'
			},
		"IL": {
			name: 'Illinois',
			description: 'default',
			url: 'https://energy.gov/node/2153475'
			},
		"CT": {
			name: 'Connecticut',
			description: 'default',
			url: 'https://energy.gov/node/2260065'
			},
		"WI": {
			name: 'Wisconsin',
			description: 'default',
			url: 'https://energy.gov/node/2193278'
			},
		"NC": {
			name: 'North Carolina',
			description: 'default',
			url: 'https://energy.gov/node/2193286'
			},
		"DC": {
			name: 'Washington, D.C.',
			description: 'default',
			url: 'https://energy.gov/node/2260133'
		},
		"MA": {
			name: 'Massachusetts',
			description: 'default',
			url: 'https://energy.gov/node/1773091'
			},
		"TN": {
			name: 'Tennessee',
			description: 'default',
			url: 'https://energy.gov/node/2193210'
			},
		"AR": {
			name: 'Arkansas',
			description: 'default',
			url: 'https://energy.gov/node/2153439'
			},
		"MO": {
			name: 'Missouri',
			description: 'default',
			url: 'https://energy.gov/node/2166379'
			},
		"GA": {
			name: 'Georgia',
			description: 'default',
			url: 'https://energy.gov/node/2153463'
			},
		"SC": {
			name: 'South Carolina',
			description: 'default',
			url: 'https://energy.gov/node/2193186'
			},
		"KY": {
			name: 'Kentucky',
			description: 'default',
			url: 'https://energy.gov/node/2166147'
			},
		"AL": {
			name: 'Alabama',
			description: 'default',
			url: 'https://energy.gov/node/2153431'
			},
		"LA": {
			name: 'Louisiana',
			description: 'default',
			url: 'https://energy.gov/node/2166151'
			},
		"MS": {
			name: 'Mississippi',
			description: 'default',
			url: 'https://energy.gov/node/2166371'
			},
		"IA": {
			name: 'Iowa',
			description: 'default',
			url: 'https://energy.gov/node/2165739'
			},
		"MN": {
			name: 'Minnesota',
			description: 'default',
			url: 'https://energy.gov/node/2166159'
			},
		"OK": {
			name: 'Oklahoma',
			description: 'default',
			url: 'https://energy.gov/node/2191990'
			},
		"TX": {
			name: 'Texas',
			description: 'default',
			url: 'https://energy.gov/node/2193222'
			},
		"NM": {
			name: 'New Mexico',
			description: 'default',
			url: 'https://energy.gov/node/1952771'
			},
		"KS": {
			name: 'Kansas',
			description: 'default',
			url: 'https://energy.gov/node/2166139'
			},
		"NE": {
			name: 'Nebraska',
			description: 'default',
			url: 'https://energy.gov/node/2166459'
			},
		"SD": {
			name: 'South Dakota',
			description: 'default',
			url: 'https://energy.gov/node/2193190'
			},
		"ND": {
			name: 'North Dakota',
			description: 'default',
			url: 'https://energy.gov/node/2166467'
			},
		"WY": {
			name: 'Wyoming',
			description: 'default',
			url: 'https://energy.gov/node/2193282'
			},
		"MT": {
			name: 'Montana',
			description: 'default',
			url: 'https://energy.gov/node/2166391'
			},
		"CO": {
			name: 'Colorado',
			description: 'default',
			url: 'https://energy.gov/node/2153455'
			},
		"UT": {
			name: 'Utah',
			description: 'default',
			url: 'https://energy.gov/node/2193234'
			},
		"AZ": {
			name: 'Arizona',
			description: 'default',
			url: 'https://energy.gov/node/1952496'
			},
		"NV": {
			name: 'Nevada',
			description: 'default',
			url: 'https://energy.gov/node/1952761'
			},
		"OR": {
			name: 'Oregon',
			description: 'default',
			url: 'https://energy.gov/node/2192006'
			},
		"WA": {
			name: 'Washington',
			description: 'default',
			url: 'https://energy.gov/node/2193266'
			},
		"CA": {
			name: 'California',
			description: 'default',
			url: 'https://energy.gov/node/2153443'
			},
		"MI": {
			name: 'Michigan',
			description: 'default',
			url: 'https://energy.gov/node/2166155'
			},
		"ID": {
			name: 'Idaho',
			description: 'default',
			url: 'https://energy.gov/node/2153471'
			},
		// Territories - Hidden unless hide is set to "no"
		"GU": {
			name: 'Guam',
			description: 'The Weatherization and Intergovernmental Programs Office provides annual funding to states, U.S. territories, the District of Columbia, and Native American Tribes.  More information on this U.S. territory coming soon.',
			url: '',
			hide: 'no'
			},
		"VI": {
			name: 'Virgin Islands',
			description: 'The Weatherization and Intergovernmental Programs Office provides annual funding to states, U.S. territories, the District of Columbia, and Native American Tribes.  More information on this U.S. territory coming soon.',
			url: '',
			hide: 'no'
			},
		"PR": {
			name: 'Puerto Rico',
			description: 'The Weatherization and Intergovernmental Programs Office provides annual funding to states, U.S. territories, the District of Columbia, and Native American Tribes.  More information on this U.S. territory coming soon.',
			url: '',
			hide: 'no'
			},
		"AS": {
			name: 'American Samoa',
			description: 'The Weatherization and Intergovernmental Programs Office provides annual funding to states, U.S. territories, the District of Columbia, and Native American Tribes.  More information on this U.S. territory coming soon.',
			url: '',
			hide: 'no'
		},
		"MP": {
			name: 'Northern Mariana Islands',
			description: 'The Weatherization and Intergovernmental Programs Office provides annual funding to states, U.S. territories, the District of Columbia, and Native American Tribes.  More information on this U.S. territory coming soon.',
			url: '',
			hide: 'no'
			}
		}
}

$(document).ready(function(){
	simplemaps_usmap.load();

	$(document).on('mouseover', 'path,tspan,rect,text', function(){
		var possessiveString = "'"
		$('#tt_sm').css('max-width','180px')
		$('#tt_name_sm').addClass('stateName')
		if($('#tt_name_sm').html()[$('#tt_name_sm').html().length-1]!='s'){
			possessiveString += 's'
		}
		$('.stateProjects').html($('#tt_name_sm').html()+possessiveString)
	})

});
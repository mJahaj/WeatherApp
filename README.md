# WeatherApp
 App for Weather.
 #Icons
 https://www.npmjs.com/package/react-native-vector-icons
 https://icons.expo.fyi/

 #navigation -- We use tabs to navigate screens
 https://reactnative.dev/docs/navigation


#@env
https://www.npmjs.com/package/react-native-dotenv
-> add it to babble.config.js
-> plugins: ["module:react-native-dotenv"]


#Geo location
40.7032, -73.9014

#Render callback

#moment.js // format any data related to time and dates
npm install moment --save   # npm


#UpcomingWeather
List
Date & time
Icon
Weather at the time

#City
City Name
City Country
Population
Sunrise & Sunset

#props


#Lists
Flatlist
Section List - restaurant menu, drinks...main course...{Must array of objects}

const DATA = [
  {
    dt_text: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
];

const Item = (props) => {
  const { dt_text, min, max, condition } = props;

  return (
    <View>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text>{dt_text}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  );
};

  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
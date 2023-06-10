# WeatherApp
 App for Weather.
 #Icons
 https://www.npmjs.com/package/react-native-vector-icons
 https://icons.expo.fyi/


#UpcomingWeather
List
Date & time
Icon
Weather at the time

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
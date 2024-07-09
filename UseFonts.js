import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'Raleway': require('./Figma_Demo/assets/Fonts/Raleway-Regular.ttf'),
  });
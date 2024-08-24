```shell
yarn lint --fix
```
while specifing the attributes like border ratio or padding 
we define like paddingHorizontal:8   // Here 8 is not show pixel or any other unit rather it is a number or square matrix of pixel size

we can get out pixel size by using // PixelRatio.get() :// here pixelRatio comes from react-native


## TIPS:- 
For properties like border and borderRadius try to use even numbers for betterr result.
<!--  -->
##Tips:=
To make a component that take the overal screen height with absolute position is like
<View style={[StyleSheet.absoluteFill,{backgroundColor:"pink"}]}/>
It makes the background of the page to pink
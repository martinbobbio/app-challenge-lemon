// React
import React, { useEffect, useRef } from "react";
// React Native
import { Animated, StyleSheet } from "react-native";

interface FadeInProps {
  children: React.ReactNode;
}

/**
 * Functional component that render a fade in.
 *
 * @return React.ReactNode <FadeIn/>
 */
export function FadeIn({ children }: FadeInProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[{ opacity: fadeAnim }]}>{children}</Animated.View>
  );
}

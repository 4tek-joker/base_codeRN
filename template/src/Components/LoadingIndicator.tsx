import { Colors, XStyleSheet } from '@/Theme'
import React, { memo } from 'react'
import { ActivityIndicator, Modal, Pressable, View } from 'react-native'
import Spinkit, { SpinnerType } from 'react-native-spinkit'

interface LoadingIndicatorProps {
  type: 'default' | SpinnerType
  color?: string
  size?: number
  overlay?: boolean
  overlayColor?: string
  onRequestClose?: () => void
  backdropPressToClose?: boolean
}
const LoadingIndicator = ({
  type = 'default',
  color = Colors.primary,
  size = 20,
  overlay,
  overlayColor = Colors.black50,
  onRequestClose,
  backdropPressToClose,
}: LoadingIndicatorProps) => {
  const renderLoadingIndicator = () => {
    switch (type) {
      case 'default':
        return <ActivityIndicator size={size} color={color} />
      default:
        return <Spinkit type={type} size={size} color={color} />
    }
  }
  const Container = overlay ? Modal : View
  return (
    <Container onRequestClose={onRequestClose} visible={true} transparent>
      <Pressable
        disabled={!backdropPressToClose}
        onPress={onRequestClose}
        style={[
          overlay && {
            ...styles.overlayView,
            backgroundColor: overlayColor,
          },
        ]}
      >
        {renderLoadingIndicator()}
      </Pressable>
    </Container>
  )
}

export default memo(LoadingIndicator)

const styles = XStyleSheet.create({
  overlayView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

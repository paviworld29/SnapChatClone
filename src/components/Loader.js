import { View, ActivityIndicator, Modal, StyleSheet } from 'react-native'
import React from 'react'

const Loader = ({ isLoading = false }) => {

  if (isLoading) {
    return (
      <Modal transparent >
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color={'blue'} />
        </View>
      </Modal>
    )
  }

  return null

}


const styles = StyleSheet.create({
  loaderStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
})


export default Loader

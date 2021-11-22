import React, { useEffect, useRef, useState } from 'react';
import { Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons'

export default function App() {
  const camRef = useRef<Camera>(null)
  const [hasPermission, setHasPermission] = useState<boolean>(false)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [capturedPhoto, setCapturedPhoto] = useState<string|null>(null)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted') 
    })()
  }, [])

  function flipCamera() {
    setType(
      type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    )
  }

  async function takePhoto() {
    if (camRef) {
      const data = await camRef.current?.takePictureAsync()
      setCapturedPhoto(data?.uri || null)
      setOpen(true)
    }
  }

  if (!hasPermission) {
    return <Text>
      Sem acesso a câmera
    </Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={camRef}
      >
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={flipCamera}
          >
            <FontAwesome name='exchange' size={23} color='red'/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.photoButton}
            onPress={takePhoto}
          >
            <FontAwesome name='camera' size={23} color='#ffffff'/>
          </TouchableOpacity>
        </View>
      </Camera>

      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
      >
        <View style={styles.contentModal}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => { setOpen(false) }}
          >
            <FontAwesome name="close" size={50} color="#ffffff"></FontAwesome>
          </TouchableOpacity>
          <Image
            style={styles.imgPhoto}
            source={{ uri: capturedPhoto as string }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    height: '100%',
    width: '100%'
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  flipButton: {
    position: 'absolute',
    bottom: 50,
    left: 30,
    backgroundColor: '#ffffff',
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    left: 2,
    margin: 20
  },
  imgPhoto: {
    height: 400,
    width: '100%'
  }
});

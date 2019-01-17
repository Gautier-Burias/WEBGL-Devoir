import './css/style.styl'

import * as THREE from 'three'

// SETUP --------------------------------------------------------

/**
 * Sizes
 */

const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', ()=>
{
    // Update sizes 
    sizes.width = window.innerHeight
    sizes.height = window.innerWidth

    // Upadate camera
    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()

    // Update renderer 
    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})


// MESH ----------------------------------------------------------------------

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Vaiseau

const vaisseau = new THREE.Object3D()
scene.add(vaisseau)

 // Intérieur vaisseau 
 

 const intVaisseau = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1, 1.5),
    new THREE.MeshStandardMaterial({ metalness: 0.3, roughness: 0.8, color: 0xffcc99 })
)
scene.add(intVaisseau)

// Renderer

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

// Loop --------------------------------------------------------
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Update house
    vaisseau.rotation.y += 0.003

    // Update camera
    camera.position.x = cursor.x * 3
    camera.position.y = - cursor.y * 3
    camera.lookAt(new THREE.Vector3())

    // Renderer
    renderer.render(scene, camera)
}
loop()


//import image from './images/image.jpg'

//const $img = new Image()
//$img.src = image
//document.body.appendChild($img)
/*

import Exemple from './js/Exemple.js'

console.log('Hello Webpack')

const exemple = new Exemple()

if(module.hot)
{
    module.hot.accept()

    module.hot.dispose(() =>
    {
        console.log('dispose')
    })
}
*/
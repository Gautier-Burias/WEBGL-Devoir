import './css/style.styl'
import Vaisseau from './js/Vaisseau.js'

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
const cursor = { x: 0, y: 0, down: false }

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

window.addEventListener('mousedown', () =>
{
    cursor.down = true
})

window.addEventListener('mouseup', () =>
{
    cursor.down = false
})

// MESH ----------------------------------------------------------------------


// Scene ----------------------------------------------------------------------

const scene = new THREE.Scene()


// Vaiseau ----------------------------------------------------------------------

const vaisseau = new Vaisseau()
scene.add(vaisseau.container)

/*

const vaisseau = new THREE.Object3D()
scene.add(vaisseau)

 // Intérieur vaisseau ----------------------------------------------------------------------


 const intVaisseau = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 5, 2.5),
    new THREE.MeshStandardMaterial({ metalness: 1, roughness: 0.8, color: 0xF8F8F8, side: THREE.DoubleSide })
)
vaisseau.add(intVaisseau)

const mur = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 10, 2.5),
    new THREE.MeshStandardMaterial({ metalness: 1, roughness: 0.8, color: 0xF8F8F8, side: THREE.DoubleSide })
)
mur.position.y = 4
mur.position.z = 3
mur.rotation.x = 10


vaisseau.add(mur)
*/

// Camera ----------------------------------------------------------------------

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 6
camera.position.x = 10
camera.position.y = 10
vaisseau.container.add(camera)


// Lights ----------------------------------------------------------------------

const sunLightt = new THREE.AmbientLight()
scene.add(sunLightt)

const sunLight = new THREE.DirectionalLight(0xffcccc, 0.6)
sunLight.position.x = 1
sunLight.position.y = 1
sunLight.position.z = 1
scene.add(sunLight)



// Lampe création ----------------------------------------------------------------------

const lampe = new THREE.PointLight(0xff0000, 0.9)
lampe.position.z = 0.5
vaisseau.container.add(lampe)

// Renderer ----------------------------------------------------------------------

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

// Loop --------------------------------------------------------
const loop = () =>
{
    window.requestAnimationFrame(loop)
    
    if(cursor.down){

        lampe.position.x = cursor.x * 12
        lampe.position.y= -cursor.y * 12
    }

    // Update vaisseau

    // vaisseau.rotation.y += 0.003

    // Update camera
    camera.position.x = 0
    camera.position.y = 0
    camera.lookAt(new THREE.Vector3())

    // Renderer
    renderer.render(scene, camera)
    //console.log(cursor.x, cursor.y)
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
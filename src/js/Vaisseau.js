import * as THREE from 'three'

export default class Vaisseau {
    constructor()
    {
        this.container = new THREE.Object3D()

        this.setBigWall()
        this.setLittleWalls()

        
    }

    setBigWall()
    {
        this.bigwall = {}
        this.bigwall.geometry = new THREE.PlaneBufferGeometry(10, 5, 2.5)
        this.bigwall.material = new THREE.MeshStandardMaterial({ metalness: 1, roughness: 0.8, color: 0xF8F8F8, side: THREE.DoubleSide })
        this.bigwall.mesh = new THREE.Mesh(this.bigwall.geometry, this.bigwall.material)
        this.container.add(this.bigwall.mesh)
    }

    setLittleWalls()
    {
        this.roof = {}
        this.roof.geometry = new THREE.PlaneBufferGeometry(15, 10, 3),
        this.roof.material = new THREE.MeshStandardMaterial ({metalness: 1, roughness: 0.8, color: 0xF8F8F8, side: THREE.DoubleSide, transparent :true })
        this.roof.mesh = new THREE.Mesh(this.roof.geometry, this.roof.material)
        this.container.add(this.roof.mesh)
        this.roof.mesh.position.y = 4
        this.roof.mesh.position.z = 3
        this.roof.mesh.rotation.x = 10.85

        this.rightside = {}
        this.rightside.geometry = new THREE.PlaneBufferGeometry(10, 15, 3),
        this.rightside.material = new THREE.MeshStandardMaterial ({metalness: 1, roughness: 0.8, color: 0xF8F8F8, side: THREE.DoubleSide } )
        this.rightside.mesh = new THREE.Mesh(this.rightside.geometry, this.rightside.material)
        this.container.add(this.rightside.mesh)
        this.rightside.mesh.position.y = 4
        this.rightside.mesh.position.z = 1
        this.rightside.mesh.position.x = 7
        this.rightside.mesh.rotation.y = 8

        this.leftside = {}
        this.leftside.geometry = new THREE.PlaneBufferGeometry(10, 15, 3),
        this.leftside.material = new THREE.MeshStandardMaterial ({metalness: 1, roughness: 0.8, color: 0xF8F8F8, side: THREE.DoubleSide } )
        this.leftside.mesh = new THREE.Mesh(this.leftside.geometry, this.leftside.material)
        this.container.add(this.leftside.mesh)
        this.leftside.mesh.position.y = 4
        this.leftside.mesh.position.z = 1
        this.leftside.mesh.position.x = -7
        this.leftside.mesh.rotation.y = -8

        this.floor = {}
        this.floor.geometry = new THREE.PlaneBufferGeometry(15, 10, 3),
        this.floor.material = new THREE.MeshStandardMaterial ({metalness: 1, roughness: 0.8, color: 0xF8F8F8, side: THREE.DoubleSide } )
        this.floor.mesh = new THREE.Mesh(this.floor.geometry, this.floor.material)
        this.container.add(this.floor.mesh)
        this.floor.mesh.position.y = -4
        this.floor.mesh.position.z = 1
        this.floor.mesh.position.x = 0
        this.floor.mesh.rotation.x = 5



    }
}
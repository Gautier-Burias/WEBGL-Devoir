import * as THREE from 'three'

export default class Vaisseau {
    constructor()
    {
        this.container = new THREE.Object3D()

        this.setBigWall()
        this.setLittleWalls()
        this.setSpace()
        this.setAnimation()

        
    }

    setBigWall()
    {
        this.bigwall = {}
        this.bigwall.geometry = new THREE.PlaneBufferGeometry(10, 5, 10, 5),
        this.bigwall.material = new THREE.MeshPhysicalMaterial
({metalness: 1, color : 0xF4F4EC, side: THREE.DoubleSide, transparent: true, opacity: 1, wireframe: true } )
        this.bigwall.mesh = new THREE.Mesh(this.bigwall.geometry, this.bigwall.material )
        this.container.add(this.bigwall.mesh)
        this.bigwall.mesh.position.y = 0
        this.bigwall.mesh.position.z = 0
        this.bigwall.mesh.position.x = 0
        this.bigwall.mesh.rotation.y = 0
    }
        
    setLittleWalls()
    {
        this.rightside = {}
        this.rightside.geometry = new THREE.PlaneBufferGeometry(10, 18, 3),
        this.rightside.material = new THREE.MeshPhysicalMaterial
({metalness: 1, roughness: 1.2, color : 0xF4F4EC, side: THREE.DoubleSide } )
        this.rightside.mesh = new THREE.Mesh(this.rightside.geometry, this.rightside.material)
        this.container.add(this.rightside.mesh)
        this.rightside.mesh.position.y = 4
        this.rightside.mesh.position.z = 3.4
        this.rightside.mesh.position.x = 7
        this.rightside.mesh.rotation.y = 8

        this.leftside = {}
        this.leftside.geometry = new THREE.PlaneBufferGeometry(10, 18, 3),
        this.leftside.material = new THREE.MeshPhysicalMaterial
({metalness: 1, roughness: 1.2, color : 0xF4F4EC, side: THREE.DoubleSide } )
        this.leftside.mesh = new THREE.Mesh(this.leftside.geometry, this.leftside.material)
        this.container.add(this.leftside.mesh)
        this.leftside.mesh.position.y = 4
        this.leftside.mesh.position.z = 3.4
        this.leftside.mesh.position.x = -7
        this.leftside.mesh.rotation.y = -8

        this.roof = {}
        this.roof.geometry = new THREE.PlaneBufferGeometry(10.3, 10, 3),
        this.roof.material = new THREE.MeshPhysicalMaterial
({metalness: 1, roughness: 1.2, color : 0xF4F4F4, side: THREE.DoubleSide})
        this.roof.mesh = new THREE.Mesh(this.roof.geometry, this.roof.material)
        this.container.add(this.roof.mesh)
        this.roof.mesh.position.y = 4
        this.roof.mesh.position.z = 4.6
        this.roof.mesh.position.x = 0
        this.roof.mesh.rotation.x = -5.01

        this.floor = {}
        this.floor.geometry = new THREE.PlaneBufferGeometry(10.3, 10, 3),
        this.floor.material = new THREE.MeshPhysicalMaterial
({metalness: 1, roughness: 1.2, color : 0xF4F4F4, side: THREE.DoubleSide } )
        this.floor.mesh = new THREE.Mesh(this.floor.geometry, this.floor.material)
        this.container.add(this.floor.mesh)
        this.floor.mesh.position.y = -4
        this.floor.mesh.position.z = 4.6
        this.floor.mesh.position.x = 0
        this.floor.mesh.rotation.x = 5

    }

    setSpace()
    {
        this.space = {}
        this.space.geometry = new THREE.Geometry()

        for(let i = 0; i < 1000; i++)
        {
            const vertice = new THREE.Vector3()

            const angle = Math.random() * Math.PI * 4
            const distance = 10 + Math.random() * 4

            vertice.x = Math.sin(angle) * distance 
            vertice.y = (Math.random() - 0.5) * 10
            vertice.z = Math.cos(angle) * distance
            this.space.geometry.vertices.push(vertice)
        }

        this.space.material = new THREE.PointsMaterial({
            size : 0.03,
            sizeAttenuation : true,
            transparent: true,
        })
        this.space.points = new THREE.Points(this.space.geometry, this.space.material)
        this.space.points.position.z = 6
        this.container.add(this.space.points)
    }

    setAnimation(){

        const loop = ()=> 
        {
            window.requestAnimationFrame(loop)
            this.space.points.rotation.y += 0.0005

        }
        loop()
    }

}
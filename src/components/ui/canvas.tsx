// Interactive canvas trail effect — follows mouse/touch cursor with colorful spring-physics lines.
// Ported from the original vanilla JS implementation. Module-scoped state is fine since
// only one canvas instance is ever rendered on this site.

// @ts-ignore
function WaveNode(e) {
  // @ts-ignore
  this.init(e || {})
}

WaveNode.prototype = {
  // @ts-ignore
  init: function (e) {
    // @ts-ignore
    this.phase = e.phase || 0
    // @ts-ignore
    this.offset = e.offset || 0
    // @ts-ignore
    this.frequency = e.frequency || 0.001
    // @ts-ignore
    this.amplitude = e.amplitude || 1
  },
  update: function () {
    // @ts-ignore
    this.phase += this.frequency
    // @ts-ignore
    nodeVal = this.offset + Math.sin(this.phase) * this.amplitude
    return nodeVal
  },
  value: function () {
    return nodeVal
  },
}

// @ts-ignore
function Line(e) {
  // @ts-ignore
  this.init(e || {})
}

Line.prototype = {
  // @ts-ignore
  init: function (e) {
    // @ts-ignore
    this.spring = e.spring + 0.1 * Math.random() - 0.05
    // @ts-ignore
    this.friction = Config.friction + 0.01 * Math.random() - 0.005
    // @ts-ignore
    this.nodes = []
    for (let n = 0; n < Config.size; n++) {
      // @ts-ignore
      const t = new TrailNode()
      // @ts-ignore
      t.x = pos.x
      // @ts-ignore
      t.y = pos.y
      // @ts-ignore
      this.nodes.push(t)
    }
  },
  update: function () {
    // @ts-ignore
    let e = this.spring
    // @ts-ignore
    let t = this.nodes[0]
    // @ts-ignore
    t.vx += (pos.x - t.x) * e
    // @ts-ignore
    t.vy += (pos.y - t.y) * e
    // @ts-ignore
    for (let n, i = 0, a = this.nodes.length; i < a; i++) {
      // @ts-ignore
      t = this.nodes[i]
      if (i > 0) {
        // @ts-ignore
        n = this.nodes[i - 1]
        // @ts-ignore
        t.vx += (n.x - t.x) * e
        // @ts-ignore
        t.vy += (n.y - t.y) * e
        // @ts-ignore
        t.vx += n.vx * Config.dampening
        // @ts-ignore
        t.vy += n.vy * Config.dampening
      }
      // @ts-ignore
      t.vx *= this.friction
      // @ts-ignore
      t.vy *= this.friction
      t.x += t.vx
      t.y += t.vy
      e *= Config.tension
    }
  },
  draw: function () {
    let ex: number, tx: number
    // @ts-ignore
    let nx = this.nodes[0].x
    // @ts-ignore
    let ny = this.nodes[0].y
    // @ts-ignore
    ctx.beginPath()
    // @ts-ignore
    ctx.moveTo(nx, ny)
    // @ts-ignore
    for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
      // @ts-ignore
      ex = this.nodes[a]
      // @ts-ignore
      tx = this.nodes[a + 1]
      // @ts-ignore
      nx = 0.5 * (ex.x + tx.x)
      // @ts-ignore
      ny = 0.5 * (ex.y + tx.y)
      // @ts-ignore
      ctx.quadraticCurveTo(ex.x, ex.y, nx, ny)
    }
    // @ts-ignore
    ex = this.nodes[this.nodes.length - 2]
    // @ts-ignore
    tx = this.nodes[this.nodes.length - 1]
    // @ts-ignore
    ctx.quadraticCurveTo(ex.x, ex.y, tx.x, tx.y)
    // @ts-ignore
    ctx.stroke()
    // @ts-ignore
    ctx.closePath()
  },
}

// @ts-ignore
function onMousemove(e) {
  function initLines() {
    lines = []
    for (let i = 0; i < Config.trails; i++) {
      // @ts-ignore
      lines.push(new Line({ spring: 0.45 + (i / Config.trails) * 0.025 }))
    }
  }

  // @ts-ignore
  function onMove(e) {
    if (e.touches) {
      // @ts-ignore
      pos.x = e.touches[0].pageX
      // @ts-ignore
      pos.y = e.touches[0].pageY
    } else {
      // @ts-ignore
      pos.x = e.clientX
      // @ts-ignore
      pos.y = e.clientY
    }
    e.preventDefault()
  }

  // @ts-ignore
  function onTouchStart(e) {
    if (e.touches.length === 1) {
      // @ts-ignore
      pos.x = e.touches[0].pageX
      // @ts-ignore
      pos.y = e.touches[0].pageY
    }
  }

  document.removeEventListener('mousemove', onMousemove)
  document.removeEventListener('touchstart', onMousemove)
  document.addEventListener('mousemove', onMove)
  document.addEventListener('touchmove', onMove)
  document.addEventListener('touchstart', onTouchStart)
  onMove(e)
  initLines()
  render()
}

function render() {
  // @ts-ignore
  if (!ctx || !ctx.running) return
  // @ts-ignore
  ctx.globalCompositeOperation = 'source-over'
  // @ts-ignore
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  // @ts-ignore
  ctx.globalCompositeOperation = 'lighter'
  // @ts-ignore
  ctx.strokeStyle = 'hsla(' + Math.round(waveNode.update()) + ',100%,50%,0.025)'
  // @ts-ignore
  ctx.lineWidth = 10
  for (let i = 0; i < Config.trails; i++) {
    const line = lines[i]
    // @ts-ignore
    line.update()
    // @ts-ignore
    line.draw()
  }
  // @ts-ignore
  ctx.frame++
  window.requestAnimationFrame(render)
}

function resizeCanvas() {
  // @ts-ignore
  if (!ctx) return
  // @ts-ignore
  ctx.canvas.width = window.innerWidth
  // @ts-ignore
  ctx.canvas.height = window.innerHeight
}

function TrailNode(this: { x: number; y: number; vx: number; vy: number }) {
  this.x = 0
  this.y = 0
  this.vx = 0
  this.vy = 0
}

// Module-level state
// @ts-ignore
let ctx: CanvasRenderingContext2D & { running: boolean; frame: number }
// @ts-ignore
let waveNode: typeof WaveNode
let nodeVal = 0
const pos: { x: number; y: number } = { x: 0, y: 0 }
// @ts-ignore
let lines: InstanceType<typeof Line>[] = []

const Config = {
  friction: 0.5,
  trails: 25,
  size: 25,
  dampening: 0.025,
  tension: 0.99,
}

export const renderCanvas = function () {
  const canvasEl = document.getElementById('canvas') as HTMLCanvasElement | null
  if (!canvasEl) return

  ctx = canvasEl.getContext('2d') as typeof ctx
  ctx.running = true
  ctx.frame = 1

  // @ts-ignore
  waveNode = new WaveNode({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  })

  document.addEventListener('mousemove', onMousemove)
  document.addEventListener('touchstart', onMousemove)
  document.body.addEventListener('orientationchange', resizeCanvas)
  window.addEventListener('resize', resizeCanvas)

  window.addEventListener('focus', () => {
    if (!ctx.running) {
      ctx.running = true
      render()
    }
  })

  window.addEventListener('blur', () => {
    ctx.running = true
  })

  resizeCanvas()
}

export const stopCanvas = function () {
  if (ctx) {
    ctx.running = false
  }
  document.removeEventListener('mousemove', onMousemove)
  document.removeEventListener('touchstart', onMousemove)
}

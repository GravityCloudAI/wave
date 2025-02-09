"use strict"
import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import githubApp from './integrations/github'

const app = new Hono()

app.get('/health', (c) => c.text('OK'))

githubApp(app)

serve({
    port: 8080,
    fetch: app.fetch,
}, () => {
    console.log('Server is running on http://localhost:8080')
})

export default app
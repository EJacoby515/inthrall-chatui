<script lang="ts">
    import { onMount } from 'svelte';
    import { getBackendConfig } from '$lib/apis';
  
    let status = 'Checking connection...';
    let error: unknown = null;
  
    onMount(async () => {
      try {
        const res = await fetch('/api/config', {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        status = data ? 'Connected!' : 'Failed to connect';
        console.log('Response:', data);
      } catch (e) {
        error = e;
        status = 'Error connecting';
        console.error('Error:', e);
      }
    });
  </script>
  
  <div>
    <h1>Backend Connection Test</h1>
    <p>Status: {status}</p>
    {#if error}
      <p style="color: red">Error: {error.message}</p>
    {/if}
  </div> 
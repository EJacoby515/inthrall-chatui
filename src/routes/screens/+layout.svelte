<script lang="ts">
    import { page } from '$app/stores';
    
    const navItems = [
        { href: '/screens', label: 'Screens' },
        { href: '/screens/about', label: 'About' },
        { href: '/screens/contact', label: 'Contact' }
    ];
    
    let menuOpen = false;
</script>

<div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <nav class="w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <a href="/screens" class="text-2xl font-bold text-white">ThrallDoor</a>

                <div class="hidden md:flex items-center space-x-4">
                    {#each navItems as item}
                        <a href={item.href} class="text-gray-300 hover:text-white px-3 py-2">{item.label}</a>
                    {/each}
                    <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">
                        Launch Portal
                    </button>
                </div>

                <button class="md:hidden text-white" on:click={() => menuOpen = !menuOpen}>Menu</button>
            </div>

            {#if menuOpen}
                <div class="md:hidden py-2">
                    {#each navItems as item}
                        <a href={item.href} class="block text-gray-300 hover:text-white px-3 py-2">{item.label}</a>
                    {/each}
                    <div class="px-3 py-2">
                        <button class="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">
                            Launch Portal
                        </button>
                    </div>
                </div>
            {/if}
        </div>
    </nav>

    <!-- Main content -->
    <div class="flex-1 overflow-y-auto">
        <slot />
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800/50 border-t border-gray-800">
        <div class="max-w-7xl mx-auto py-6 px-4">
            <p class="text-center text-gray-400">
                © {new Date().getFullYear()} ThrallDoor. All rights reserved.
            </p>
        </div>
    </footer>
</div>

<style>
    :global(html, body) {
        height: 100%;
        overflow-y: auto;
    }
    
    :global(body) {
        background-color: rgb(17, 24, 39);
        color: white;
    }
</style>
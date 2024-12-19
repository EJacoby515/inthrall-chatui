<script lang="ts">
    import { goto } from '$app/navigation';
</script>

<div class="w-full">  <!-- Changed from min-h-screen -->
    <!-- Hero Section -->
    <div class="relative h-[100vh] bg-cover bg-center" 
         style="background-image: url('/portal-background.jpg')">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <h1 class="text-5xl md:text-6xl font-bold mb-4">ThrallDoor</h1>
            <p class="text-xl md:text-2xl text-gray-300 text-center max-w-2xl">
                Step through AI-powered portals to anywhere in the world
            </p>
        </div>
    </div>

    <!-- Features Section -->
    <div class="max-w-7xl mx-auto py-16 px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Instant Access</h3>
                <p class="text-gray-300">Connect to any location with an established portal instantly through AR technology</p>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-2">AI-Enhanced Experience</h3>
                <p class="text-gray-300">Our AI system creates seamless transitions and maintains stable connections between portals</p>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Global Network</h3>
                <p class="text-gray-300">Access buildings, landmarks, and locations across our worldwide portal network</p>
            </div>
        </div>
    </div>

    <!-- How It Works Section -->
    <div class="bg-gray-800 py-16">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center">How ThrallDoor Works</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-gray-900 p-6 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">For Users</h3>
                    <ul class="space-y-3">
                        <li>1. Locate a ThrallDoor portal point</li>
                        <li>2. Use our AR interface to view available destinations</li>
                        <li>3. Step through to your chosen location</li>
                        <li>4. Experience seamless transition between spaces</li>
                    </ul>
                </div>
                <div class="bg-gray-900 p-6 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">For Locations</h3>
                    <ul class="space-y-3">
                        <li>1. Apply to join the ThrallDoor network</li>
                        <li>2. Install a portal beacon at your location</li>
                        <li>3. Set access permissions and restrictions</li>
                        <li>4. Connect with users worldwide</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="py-16 text-center">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold mb-4">Ready to step into the future?</h2>
            <p class="text-gray-300 mb-8">Join our network of connected spaces and revolutionize how you move through the world</p>
            <button 
                class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
                on:click={() => goto('/')}
            >
                Find Nearest Portal
            </button>
        </div>
    </div>
</div>

<style>
    /* Add if you need any page-specific styles */
</style>
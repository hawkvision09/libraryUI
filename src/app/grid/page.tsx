"use client";
import { Grid } from "woxin-user-interface";

const GridComponent = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8 font-sans">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                React Grid Component
            </h1>

            {/* Example 1: Basic Grid with Spacing */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Basic Grid with Spacing</h2>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="p-4 bg-white rounded-lg shadow-md h-24 flex items-center justify-center">
                            Item 1
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="p-4 bg-white rounded-lg shadow-md h-24 flex items-center justify-center">
                            Item 2
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="p-4 bg-white rounded-lg shadow-md h-24 flex items-center justify-center">
                            Item 3
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="p-4 bg-white rounded-lg shadow-md h-24 flex items-center justify-center">
                            Item 4
                        </div>
                    </Grid>
                </Grid>
            </div>

            {/* Example 2: Different Column Sizes */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Different Column Sizes</h2>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={8}>
                        <div className="p-4 bg-white rounded-lg shadow-md h-24 flex items-center justify-center">
                            Large Item (8/12)
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="p-4 bg-white rounded-lg shadow-md h-24 flex items-center justify-center">
                            Small Item (4/12)
                        </div>
                    </Grid>
                </Grid>
            </div>

            {/* Example 3: Nested Grids */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Nested Grids</h2>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-lg font-medium mb-2">Parent Item</h3>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <div className="p-4 bg-gray-200 rounded-lg h-16 flex items-center justify-center">
                                        Nested Item A
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="p-4 bg-gray-200 rounded-lg h-16 flex items-center justify-center">
                                        Nested Item B
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="p-4 bg-white rounded-lg shadow-md h-full flex items-center justify-center">
                            Another Parent Item
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default GridComponent;
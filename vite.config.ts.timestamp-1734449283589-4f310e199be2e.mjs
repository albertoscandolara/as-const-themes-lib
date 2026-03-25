// vite.config.ts
import { defineConfig } from 'file:///C:/C/arcoda3d/node_modules/vitest/dist/config.js';
import { resolve } from 'path';
import dts from 'file:///C:/C/arcoda3d/node_modules/vite-plugin-dts/dist/index.mjs';
var __vite_injected_original_dirname = 'C:\\C\\arcoda3d';
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, 'src/library/main.ts'),
      name: 'am3d',
      formats: ['es', 'umd'],
      fileName: (format) => `am3d.${format}.js`,
    },
    outDir: 'lib',
  },
  resolve: { alias: { src: resolve('src/library') } },
  test: {
    setupFiles: [],
    coverage: {
      exclude: ['*.config.*', '*.d.ts'],
    },
  },
  plugins: [
    dts({
      entryRoot: 'src/library',
      // Ensures type declarations are copied from the `src` folder
      outDir: 'lib/types',
      // Type declarations will be placed in `lib`
    }),
  ],
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxDXFxcXGFyY29kYTNkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxDXFxcXGFyY29kYTNkXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9DL2FyY29kYTNkL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2xpYnJhcnkvbWFpbi50cycpLFxuICAgICAgbmFtZTogJ2FtM2QnLFxuICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgYW0zZC4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgb3V0RGlyOiAnbGliJyxcbiAgfSxcbiAgcmVzb2x2ZTogeyBhbGlhczogeyBzcmM6IHJlc29sdmUoJ3NyYy9saWJyYXJ5JykgfSB9LFxuICB0ZXN0OiB7XG4gICAgc2V0dXBGaWxlczogW10sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIGV4Y2x1ZGU6IFsnKi5jb25maWcuKicsICcqLmQudHMnXSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgZHRzKHtcbiAgICAgIGVudHJ5Um9vdDogJ3NyYy9saWJyYXJ5JywgLy8gRW5zdXJlcyB0eXBlIGRlY2xhcmF0aW9ucyBhcmUgY29waWVkIGZyb20gdGhlIGBzcmNgIGZvbGRlclxuICAgICAgb3V0RGlyOiAnbGliL3R5cGVzJywgLy8gVHlwZSBkZWNsYXJhdGlvbnMgd2lsbCBiZSBwbGFjZWQgaW4gYGxpYmBcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErTixTQUFTLG9CQUFvQjtBQUM1UCxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBRmhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUMvQyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsUUFBUSxNQUFNO0FBQUEsSUFDdEM7QUFBQSxJQUNBLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssUUFBUSxhQUFhLEVBQUUsRUFBRTtBQUFBLEVBQ2xELE1BQU07QUFBQSxJQUNKLFlBQVksQ0FBQztBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1IsU0FBUyxDQUFDLGNBQWMsUUFBUTtBQUFBLElBQ2xDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsV0FBVztBQUFBO0FBQUEsTUFDWCxRQUFRO0FBQUE7QUFBQSxJQUNWLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

const { sources } = require('webpack');

class BookmarkletPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap('BookmarkletPlugin', (compilation) => {
            compilation.hooks.afterProcessAssets.tap(
                {
                    name: 'BookmarkletPlugin',
                    stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
                },
                (chunks) => {
                    for (const chunk in chunks) {
                        const asset = compilation.getAsset(chunk);
                        const contents = asset.source.source();

                        compilation.updateAsset(
                            chunk,
                            new sources.RawSource(
                                `javascript: (function(){${contents}})()`
                            )
                        );
                    }
                }
            );
        });
    }
}

module.exports = BookmarkletPlugin;

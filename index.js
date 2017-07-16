ob = function (ctx) {
    return new Proxy(ctx, {
        set: function (ctx, prop, value, r) {
            if (ctx[prop] !== value) {
                if (typeof ctx['changed'] === 'function')
                    ctx.changed.call(ctx, prop, value, ctx[prop])
                if (typeof ctx[`${prop}Changed`] === 'function')
                    ctx[`${prop}Changed`].call(ctx, value, ctx[prop])
                ctx[prop] = value
                return true
            }
        }
    })
}
module.exports = ob.default = ob
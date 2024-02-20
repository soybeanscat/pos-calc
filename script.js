function calculate() {
    var size_portfolio = parseFloat(document.getElementById('size_portfolio').value);
    var risk_per_pos = parseFloat(document.getElementById('risk_per_pos').value);
    var ep_upper = parseFloat(document.getElementById('ep_upper').value);
    var ep_lower = parseFloat(document.getElementById('ep_lower').value);
    var ep_single = parseFloat(document.getElementById('ep_single').value);
    var price_sl = parseFloat(document.getElementById('price_sl').value);
    var count_order = parseInt(document.getElementById('count_order').value);

    var ep_gap = ep_upper - ep_lower;

    let ep_array = [];
    var ep_array = [];
    ep_array[0] = ep_upper;
    for (let i = 1; i < count_order; i++) {
        ep_array.push(ep_array[i-1] + ep_gap);
    }

    var risk_per_pos_amount = size_portfolio * risk_per_pos;
    var risk_sl = price_sl - ep_0;
    var ep_avg = (ep_upper - ep_lower) / 2;

    var pos_size_total = - risk_per_pos_amount / risk_sl;
    var tick_total = pos_size_total / ep_avg;
    var pos_size_order = pos_size_total / count_order;
    var tick_order = tick_total / count_order;
    var lev_max = - risk_sl / price_sl * 0.8;
    var margin_total = pos_size_total / lev_max;
    var risk_sl_amount = risk_sl * margin_total;

    document.getElementById('result').textContent = result;
    document.getElementById('ep_array').textContent = ep_array;
    document.getElementById('pos_size_total').textContent = pos_size_total;
    document.getElementById('pos_size_order').textContent = pos_size_order;
    document.getElementById('tick_total').textContent = tick_total;
    document.getElementById('tick_order').textContent = tick_order;
    document.getElementById('lev_max').textContent = lev_max;
    document.getElementById('margin_total').textContent = margin_total;
    document.getElementById('risk_sl').textContent = risk_sl;
    document.getElementById('risk_sl_amount').textContent = risk_sl_amount;
}

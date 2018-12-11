; (function () {
    'use strict';

    window.biaoTable = {
        boot,
    };

    let table, thead, tbody, structure, list, ops;
    let c='';

    /**
     * 
     * @param {string} tableSelector 
     * @param {Object} struct 
     * @param {Array} data 
     * @param {Object} ops
     */
    function boot(tableSelector, struct, data, operations) {
        structure = struct; list = data; ops = operations;

        table = document.querySelector(tableSelector);
        table.classList.add('my-table');
        // thead=table.tHead;//or thead=table.querySelector('thead')
        tbody = table.tBodies[0];
        render();
    }

    function render() {
        table.innerHTML='';
        renderHead();
        renderBody();
    }

    function renderHead() {
        let html = '';

        for (let key in structure) {
            html += `<th>${structure[key]}</th>`
        }
        if(ops){
            html+=`<th>操作</th>`;
        }
        thead = document.createElement('thead');
        thead.innerHTML = html;

        table.appendChild(thead);

    }

    /**
     * biao style
     */

    function renderBody() {
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
        list.forEach((it,index) => {//index返回给插件调用者
            let tr = document.createElement('tr');
            for (let key in structure) {
                tr.innerHTML += `<td>${it[key] || '-'}</td>`;
            }
            if(ops){
                let td='';
                for(let action in ops){
                    td+=`<button class=${action}>${ops[action].name}</button>`;     
                }
                tr.innerHTML+=`<td>${td}</td>`;

                //为每个按钮绑定事件
                for(let key in ops){
                    tr.querySelector('.'+key)
                    .addEventListener(ops[key].event,()=>{
                        ops[key].action(tr,index);//回传正在循环的data的索引和该行的元素tr
                    })
                }
            }
            tbody.appendChild(tr);
        });
    }

    /**
     * 自己写的
     */

    // function renderBody() {
    //     let html='';
    //     let result='';
    //     tbody = document.createElement('tbody');
    //     list.forEach(it=>{
    //         // for(let key in structure){
    //         //     console.log( key);
    //         //     console.log(it[key] );
    //         // }


    //         html='';
    //         for(let key in structure){
    //             html+=`<td>${it[key]}</td>`;
    //         }
    //         console.log( html);
    //         result+=`<tr>${html}</tr>`
    //         console.log(result);
    //     })

    //     tbody.innerHTML=result;
    //     table.appendChild(tbody);
    // }

})();






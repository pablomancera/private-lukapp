<?php

namespace App\View\Components;

use Illuminate\View\Component;

class MoneyTableModalUpdate extends Component
{
    public $type;
    public $route;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($type, $route)
    {
        $this->type = $type;
        $this->route = $route;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.money-table-modal-update');
    }
}

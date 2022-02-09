<div class="modal fade" id="moneyUpdateModal" tabindex="-1" aria-labelledby="moneyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <form id="update-form" action="" method="post">
                @csrf
                @method('PUT')
                <div class="modal-header">
                    <h5 class="modal-title" id="moneyModalLabel">Editar {{ $slot }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group form-floating mb-3">
                        <input type="text" class="form-control" id="update-name" name="name" placeholder="nombre">
                        <label class="z-10" for="name">Nombre</label>
                    </div>
                    <div class="input-group form-floating mb-3">
                        <input type="number" class="form-control" id="update-value" name="value" placeholder="nombre">
                        <label class="z-10" for="value">Valor</label>
                    </div>
                    @if ($type == "fixed")
                    <div class="input-group form-floating mb-3">
                        <input type="number" class="form-control" id="update-day" name="day" placeholder="nombre">
                        <label class="z-10" for="day">Día</label>
                    </div>
                    @endif
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <input type="submit" class="btn btn-primary" value="Guardar"></input>
                </div>
            </form>
        </div>
    </div>
</div>
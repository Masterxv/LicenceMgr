<tr data-id="{{{ $sheet->id }}}">
    <td>{{startEditable("name", "/sheet/edit/".$sheet->id)}}{{{ $sheet->name }}}{{endEditable()}}</td>
    <td>{{{ $sheet->filename }}}</td>
    <td>
        <a href="#" class="button split tiny text-center"><div style="display:inline" class="getSheet">@lang('controls.showSheetButton')</div> <span data-dropdown="drop-sheet-{{{ $sheet->id }}}"></span></a>
        <ul id="drop-sheet-{{{ $sheet->id }}}" class="f-dropdown" data-dropdown-content>
            <li><a  class="deleteSheet" href="#">@lang('controls.removeSubButton')</a></li>
        </ul>
    </td>
</tr>